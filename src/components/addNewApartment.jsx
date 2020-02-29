import React from 'react';
import validate, {field} from '../validator';
import InputErrors from '../inputError'; 
import {getAllCountries,getCitiesByCountryName} from '../api/controllers/countries';
import {addNewApartment} from '../api/controllers/apartments';
import Cookies from 'js-cookie';
import {Form} from 'react-bootstrap';
import {propertyTypes} from '../filterValues.js';

var FormData = require('form-data');


class NewApartmentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            countries:[],
            cities : [],
            selectedCountry:false,
            country:field({name:'country',isRequired:true}),
            city:field({name:'city',isRequired:true}),
            address: field({name: 'address', isRequired: true}),
            city_id: field({name: 'city_id', isRequired: true}),
            price: field({name: 'price', isRequired:true}),
            number_of_room: field({name:'number_of_room',isRequired:true}),
            number_of_bath: field({name:'number_of_bath',isRequired:true}),
            sqft:field({name:'sqft',isRequired:true}),
            description: field({name:'description',isRequired:true}),
            sale_status: field({name:'sale_status',isRequired:true}),
            property_type : field({name:'property_type',isRequired:true}),
            main_image:field({name:'main_image',isRequired:true}),
            images:[],
        };
        this.inputChange = this.inputChange.bind(this);
    }
    async componentDidMount() {
        const countries = await getAllCountries();
        
        this.setState({
            countries:countries,
        });
    }
    inputChange({target: {name, value}}){
        const errors = validate(name, value, this.state[name].validations);
        this.setState({
            [name]: {
                ...this.state[name],
                value,
                errors
            }
        });
    }
    async fileChange(e){
        let filesArr = [...e.target.files];  
       await this.setState({images:filesArr});

    }

    onSubmit = async e => {
        console.log(this.state)
        e.preventDefault();
        // debugger;
        const formData = new FormData();
        let isOK = true;
        let errors;
        for(let prop in this.state){
        
            if(prop === 'countries' || prop === 'cities' || prop === 'selectedCountry' || prop === 'images'){
                continue
            }
            else if(prop instanceof Object){
                console.log(prop)
                
            }
            else{
                const field = this.state[prop];
                errors = validate(prop, field.value, field.validations);

            }
            if(errors.length){
                isOK = false;
                this.setState({
                    [prop]: {
                        ...this.state[prop],
                        errors
                    }
                });
            }
        }
        if(isOK){
            for(let prop in this.state){ 
                if(prop === 'countries' || prop === 'cities' || prop === 'selectedCountry' ){
                    continue
                }
                else if(prop === 'images'){
                    this.state.images.forEach(image=>{
                        formData.append('images',image)
                    })
                }
                else if(prop === 'main_image'){
                    formData.append('images',document.querySelector('.image').files[0]);
                }else{
                    formData.append(prop,this.state[prop].value);
                }
            }
            formData.set('availability','available');
            formData.set('user_id', JSON.parse(Cookies.get('login')).id);
            formData.set('status', 'pending'); 
            

            //Send the data somewhere
        //     const values={ //
        //     address:this.state.address, // 
        //     city_id:this.state.city_id,   // 
        //     number_of_room:this.state.number_of_room, // 
        //     number_of_bath:this.state.number_of_bath, // 
        //     sqft:this.state.sqft, // 
        //     description:this.state.description, // 
        //     sale_status:this.state.sale_status,  
        //     availability: this.state.availability, 
        //     property_type:this.state.property_type, //
        //     main_image:this.state.main_image,
        //     price:this.state.price,//

        // }
            
            const response = await addNewApartment(formData);
            console.log(response)
        }    
    } 
    onCountrySelected = async (event) => {
        // debugger;
        const countryObj = this.state.country;
        countryObj.value = event.target.value;
        await this.setState({country:countryObj})     
        // get cities
        await this.getCitiesByCountryName(countryObj.value)
      }
      onCitySelected = async (event) => {
        const cityObj = this.state.city;
        cityObj.value = event.target.value;
        await this.setState({
            city:cityObj,
            city_id:cityObj
        });
      }
      async getCitiesByCountryName(countryName) {
        try {
            await this.setState({selectedCountry:!this.state.selectedCountry})
            const cities = await fetch(`http://localhost:3000/countries/${countryName}/cities`);
            let citiesData = await cities.json();
            this.setState({
              cities:citiesData
            })
            
        }catch(error) {
            throw new Error(`get cities failed with:${error.message}`)
        }
    }

    render() {
        return (
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading text-center">Add New Apartment</h4>
                <p className="text-center">
                    Please fill out the form with correct information and then submit
                </p>
                <hr />
                <form enctype="multipart/form-data" onSubmit={this.onSubmit} >
                    <div className="row form-group">
                        <div style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Country</label>
                            {this.state.countries.countries && 
                            <Form.Group controlId = "countries">
                                <Form.Control name = 'country' onChange = {this.onCountrySelected} as = "select" style = {{width:'150px'}}>
                                    <option>Select Country</option>
                                        {this.state.countries.countries.map((country,c) => (
                                            <option key = {c} value = {country.name}>
                                            {country.name}
                                            </option>
                                        ))}
                                </Form.Control>
                                <InputErrors errors={this.state.country.errors}></InputErrors>
                            </Form.Group>
                            }
                            {this.state.selectedCountry &&
                            <div style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                                <label htmlFor="exampleInputEmail1">City</label>
                                <Form.Group controlId = "cities">
                                    <Form.Control name = 'city_id' onChange = {this.onCitySelected} as = "select" style = {{width:'125px'}}>
                                        <option>Select City</option>
                                            {this.state.cities && this.state.cities.map((city,y) => (
                                                <option key = {y} value = {city.id}>
                                                    {city.name}
                                                </option>
                                    ))}
                                    </Form.Control>
                                    <InputErrors errors={this.state.city_id.errors}></InputErrors>
                                </Form.Group>
                            </div>    }
                        </div>
                        <div style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Address</label>
                            <input type="text" name="address" className="form-control" placeholder="Enter Address"
                                onBlur={this.inputChange}></input>
                            <InputErrors errors={this.state.address.errors}></InputErrors>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Sqft</label>
                            <input type="text" name="sqft" className="form-control" placeholder="Enter Sqft"
                                onBlur={this.inputChange}></input>
                                <InputErrors errors={this.state.sqft.errors}></InputErrors>
                        </div>
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Description</label>
                            <input type="text" name="description" className="form-control" placeholder="Enter Apartment Description"
                                onBlur={this.inputChange}></input>
                                <InputErrors errors={this.state.description.errors}></InputErrors>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Number of Rooms</label>
                            <div>
                                <input name="number_of_room" onBlur={this.inputChange} type="number"  min="0" max="1000" step="1"/>
                            </div>
                            <InputErrors errors={this.state.number_of_room.errors}></InputErrors>
                        </div>
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Number of Baths</label>
                            <div>
                                <input name="number_of_bath" onBlur={this.inputChange} type="number"  min="0" max="1000" step="1"/>
                            </div>
                            <InputErrors errors={this.state.number_of_bath.errors}></InputErrors>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <Form.Group controlId = "propertyType">
                            <label htmlFor="exampleInputEmail1">Property Type</label>
                              <Form.Control name = 'property_type' onChange = {this.inputChange} as = "select" style = {{width:'fit-content'}}>
                                  <option value="">Property Type</option>
                                  {propertyTypes.map((prop,t) => (
                                      <option key = {t} value = {prop.value}>
                                          {prop.value}
                                      </option> 
                                  ))}
                               </Form.Control>
                               <InputErrors errors={this.state.property_type.errors}></InputErrors>
                           </Form.Group>
                        </div>
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Price</label>
                            <div>
                                <input name="price" onBlur={this.inputChange} type="number" defaultValue="0"/>
                            </div>
                            <InputErrors errors={this.state.price.errors}></InputErrors>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Show my property for</label>
                            <div>
                                <input onClick={this.inputChange} type="radio" name="sale_status" value="sale"/> Sell
                                <input onClick={this.inputChange} style={{marginLeft:'10px'}} type="radio" name="sale_status" value="rent"/> Rent
                                <input onClick={this.inputChange} style={{marginLeft:'10px'}} type="radio" name="sale_status" value="both"/> Both
                            </div>
                            <InputErrors errors={this.state.sale_status.errors}></InputErrors>
                        </div>
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Choose main image for your property</label>
                            <input onChange={(e)=>this.inputChange(e)} name="main_image" type="file" className="form-control-file image" id="exampleFormControlFile1"></input>
                            <InputErrors errors={this.state.main_image.errors}></InputErrors>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Choose up to 5 more images of your property</label>
                            <input onChange={(e)=>this.fileChange(e)} type="file" name="images" multiple/>
                        </div>
                        {/* <InputErrors errors={this.state.images.errors}></InputErrors> */}
                        <div  style={{textAlign:'left'}} className="col-md-4 offset-md-1">

                        </div>
                    </div>
                        <input type="submit" className="btn btn-primary btn-block"  value="submit"></input>
                </form>
            </div>
        );
    }
}
export default NewApartmentForm;