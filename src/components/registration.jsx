import React from 'react';
import validate, {field} from '../validator';
import InputErrors from '../inputError';
import {signup} from '../api/controllers/signup';
import Cookies from 'js-cookie';

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            first_name: field({name: 'first_name', isRequired: true }),
            last_name: field({name: 'last_name', isRequired: true}),
            email: field({name:'email', isRequired:true, pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}),
            password: field({name: 'password', isRequired:true, minLength: 4}),
            phone: field({name:'phone',isRequired:false})
        };
        this.inputChange = this.inputChange.bind(this);
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
    onSubmit = async e => {
        e.preventDefault();
        let isOK = true;
        for(let prop in this.state){
            const field = this.state[prop];
            const errors = validate(prop, field.value, field.validations);
            console.log(errors);
            if(errors.length){
                console.log('im in')
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
            const result = {};
            for(let prop in this.state){
                result[prop] = this.state[prop].value;
            }
            //Send the data somewhere
            console.log('signup result',result);
            const values={first_name:this.state.first_name.value,
            last_name:this.state.last_name.value,
            password:this.state.password.value,
            email:this.state.email.value,
            phone:this.state.phone.value,
            role_id:2}
            console.log('b4 response');
            const response = await signup(values);
            if(response){
                console.log('yesh response')
                window.location.assign('http://localhost:3002/');
            }
            console.log(Cookies.get('login'));
        }
    } 
    render(){
        return(
            <>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading text-center">Registration Page</h4>
                <p className="text-center">
                    Hello dear guest! Please fill in your registration details
                </p>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className="row form-group">
                        <div className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">First Name</label>
                            <input type="text" name="first_name" className="form-control" placeholder="Enter First Name"
                                onBlur={this.inputChange}
                                ></input>
                                <InputErrors errors={this.state.first_name.errors}></InputErrors>
                        </div>
                        <div className="col-md-4 offset-md-2">
                            <label htmlFor="exampleInputEmail1">Last Name</label>
                            <input type="text" name="last_name" className="form-control" placeholder="Enter Last Name"
                                onBlur={this.inputChange}
                            ></input>
                            <InputErrors errors={this.state.last_name.errors}></InputErrors>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter Email Address"
                                onBlur={this.inputChange}
                                ></input>
                                <InputErrors errors={this.state.email.errors}></InputErrors>
                        </div>
                        <div className="col-md-4 offset-md-2">
                            <label htmlFor="exampleInputEmail1">Password</label>
                            <input type="password" name="password" className="form-control" placeholder="Enter Password"
                                onBlur={this.inputChange}
                            ></input>
                            <InputErrors errors={this.state.password.errors}></InputErrors>
                        </div>
                    </div>
                    <div className="row form-group">
                        <div className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                            <input type="text" name="phone" className="form-control" placeholder="Enter Phone Number"
                                onBlur={this.inputChange}
                                ></input>
                                <InputErrors errors={this.state.phone.errors}></InputErrors>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block"  value="submit"></input>
                </form>
            </div>
        </>

        )
    }
    
}
export default Register;