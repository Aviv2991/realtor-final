import React from 'react';
import BuildCard from './build-card';
import {Form} from 'react-bootstrap';
import {
    minPriceValues,
    maxPriceValues,
    minNumberOfBaths,
    maxNumberOfBaths,
    minSqft,
    maxSqft,
    propertyTypes,
    minNumberOfRooms,
    maxNumberOfRooms
}from '../filterValues.js';

import {getAllApartments} from '../api/controllers/apartments';

class BuildApartmentsGallery extends React.Component{
    constructor(props){
        super(props);
        this.state={
          apartments:[],
          cities:[],
          toFilterArr:[],
          showMore:false,
          filterObj:{},
          countries:[],
          firstPage:1,
          apartmentsLength:null
        }
      }
      handleSearch = (event) =>{
        const name=event.target.name;
        const value=event.target.value;
        const curObj = this.state.filterObj;
        curObj[name] =value;
        this.setState({
            filterObj:curObj,
        },() => this.getApartments(this.queryBuild(this.state.filterObj)));
    }


      async componentDidMount() {
          this.getApartments();
          this.getCountries();
          this.setApartmentsLength();
      }
      async setApartmentsLength(){
          try{
            const curObj = this.state.filterObj;
            curObj['size'] = 1000;
            const query = this.queryBuild(curObj)
            const apartments = await getAllApartments(query);
            await this.setState({
              apartmentsLength:Object.values(apartments)[0].length
            })
          }catch(error){
              throw new Error(`getting apartments length failed with: ${error.message}`)
          }
          
          
      }
     async getApartments(query = ''){
         try{
            const apartments = await getAllApartments(query);
            console.log(apartments)
            this.setState({
              apartments,
              toFilterArr:apartments
            });
        }catch(error) {
          throw new Error(`get aaprtment failed with:${error.message}`)
        }
      }
      async getCountries() {
        try {
            const countries = await fetch(`http://localhost:3000/countries`)
            let data = await countries.json();
            this.setState({
                countries:data,
            })
        }catch(error) {
          throw new Error(`get aaprtment failed with:${error.message}`)
        }
      }
      async getCitiesByCountryName(countryName) {
          try {
              const cities = await fetch(`http://localhost:3000/countries/${countryName}/cities`);
              let citiesData = await cities.json();
              this.setState({
                cities:citiesData
              })
              
          }catch(error) {
              throw new Error(`get cities failed with:${error.message}`)
          }
      }
      queryBuild(obj) {
          let resultQuery = '';
          for(let curProp in obj){
            resultQuery += curProp;
            resultQuery += '=';
            resultQuery += obj[curProp];
            resultQuery += '&';
          }
          return resultQuery;
      }
      handleshowmore = () => {
        this.setState({
            showMore:!this.state.showMore,
        })
      }
      handleSubmit = (event) => {
          event.preventDefault()
      };
       onCountrySelected = async (event) => {
        // debugger;
        const eventCopy = {...event};   
        const countryName = eventCopy.target.value;     
        // get cities
        await this.getCitiesByCountryName(countryName)
        await this.handleSearch(eventCopy);
      }
      handleprev = async(e)=>{
            e.preventDefault();
          if(this.state.firstPage == 1){
              return;
          }else{
            const curObj = this.state.filterObj;
            curObj['page'] =this.state.firstPage -=1;
            curObj['size'] = 20;
            await this.setState({
                filterObj:curObj,
                apartmentsLength:this.state.apartmentsLength += 20

            },() => this.getApartments(this.queryBuild(this.state.filterObj)))
          }
      }
      handleNext = async(e) => {
        e.preventDefault();
        if(this.state.apartmentsLength-20 > 0){
            const curObj = this.state.filterObj;
            curObj['page'] =this.state.firstPage +=1;
            curObj['size'] = 20;
            await this.setState({
                filterObj:curObj,
                apartmentsLength:this.state.apartmentsLength -= 20
            },() => this.getApartments(this.queryBuild(this.state.filterObj))); 
        }else{
            return;
        }
      }
      render(){
          console.log(this.state)
          let firstapps = this.state.apartments.apartments ?
                        Object.values(this.state.apartments)[0].map((mapping,m ) =>
                        {return <BuildCard {...mapping} key = {m}/>}) : ''
          return(
              <div style={{margin:'2% 0'}}>
                  <Form>
                      <Form.Row>
                      {this.state.countries.countries  &&
                        <Form.Group controlId = "countries">
                            <Form.Control name = 'country' onChange = {this.onCountrySelected} as = "select" style = {{width:'150px'}}>
                                <option>Select Country</option>
                                    {this.state.countries.countries.map((country,c) => (
                                        <option key = {c} value = {country.name}>
                                          {country.name}
                                        </option>
                                  ))}
                            </Form.Control>
                        </Form.Group>  }
                        {this.state.filterObj.country  && 
                            <Form.Group controlId = "cities">
                                <Form.Control name = 'city' onChange = {this.handleSearch} as = "select" style = {{width:'125px'}}>
                                    <option>Select City</option>
                                        {this.state.cities && this.state.cities.map((city,y) => (
                                            <option key = {y} value = {city.id}>
                                                {city.name}
                                            </option>
                                  ))}
                                </Form.Control>
                            </Form.Group>}                                
                          <Form.Group controlId = "minPriceSelect">
                              <Form.Control name = 'minPrice' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Min Price</option>
                                  {minPriceValues.map((val,v) => (
                                      <option key = {v} value = {val.value}>
                                          {val.title}
                                      </option>
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "maxPriceSelect">
                              <Form.Control name = 'maxPrice' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Max Price</option>
                                  {maxPriceValues.map((val,v) => (
                                      <option key = {v} value = {val.value}>
                                          {val.title}
                                      </option>
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "propertyType">
                              <Form.Control name = 'propertyType' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Property Type</option>
                                  {propertyTypes.map((prop,t) => (
                                      <option key = {t} value = {prop.value}>
                                          {prop.value}
                                      </option> 
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "minNumberOfBaths">
                              <Form.Control name = 'minNumberOfBaths' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Min Baths</option>
                                  {minNumberOfBaths.map((bath,b) => (
                                      <option key = {b} value = {bath.value}>
                                          {bath.label}
                                      </option> 
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "maxNumberOfBaths">
                              <Form.Control name = 'maxNumberOfBaths' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Max Baths</option>
                                  {maxNumberOfBaths.map((bath,b) => (
                                      <option key = {b} value = {bath.value}>
                                          {bath.label}
                                      </option> 
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "minNumberOfRooms">
                              <Form.Control name = 'minNumberOfRooms' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Min Rooms</option>
                                  {minNumberOfRooms.map((room,r) => (
                                      <option key = {r} value = {room.value}>
                                          {room.label}
                                      </option> 
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "maxNumberOfRooms">
                              <Form.Control name = 'maxNumberOfRooms' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Max Rooms</option>
                                  {maxNumberOfRooms.map((room,r) => (
                                      <option key = {r} value = {room.value}>
                                          {room.label}
                                      </option> 
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "minSqft">
                              <Form.Control name = 'minSqft' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Min Sqft</option>
                                  {minSqft.map((square,s) => (
                                      <option key = {s} value = {square.value}>
                                          {square.label}
                                      </option> 
                                  ))}
                               </Form.Control>
                           </Form.Group>
                           <Form.Group controlId = "maxSqft">
                              <Form.Control name = 'maxSqft' onChange = {this.handleSearch} as = "select" style = {{width:'fit-content'}}>
                                  <option>Max Sqft</option>
                                  {maxSqft.map((square,u) => (
                                      <option key = {u} value = {square.value}>
                                          {square.label}
                                      </option> 
                                  ))}
                               </Form.Control>
                           </Form.Group>
                      </Form.Row>
                  </Form>
                  
                <div className = {'container-fluid'}>
                    <div className = {'row'}>   
                        {firstapps}
                          
                    </div>
                </div>
                    <nav aria-label="Page navigation example">
                        <ul style={{display:'flex',justifyContent:'center'}} class="pagination">
                          <li onClick={(e)=>this.handleprev(e)} class="page-item"><a class="page-link" href="#">Previous</a></li>
                        
                          <li onClick={(e)=>this.handleNext(e)} class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
              </div>
          );
      }
}
export default BuildApartmentsGallery;

