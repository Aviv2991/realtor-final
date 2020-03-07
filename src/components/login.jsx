import React from 'react';
import Cookies from 'js-cookie';

import validate, {field} from '../validator';
import InputErrors from '../inputError';

import {login} from '../api/controllers/login';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: field({name: 'username', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/}),
            password: field({name: 'password', isRequired:true, minLength: 4})
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
            const result = {};
            for(let prop in this.state){
                result[prop] = this.state[prop].value;
            }
            //Send the data somewhere
            console.log(result);
            const response = await login(this.state.username.value, this.state.password.value);
            if(response){
                window.location.assign('http://localhost:3002/user_profile');
            }
            console.log(Cookies.get('login'));
        }
    }  
    
    render(){
        return(
            <>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading text-center">Login Page</h4>
                <p className="text-center">
                    Hello dear guest! Please fill in your login details
                </p>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className="row form-group">
                        <div className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="text" name="username" className="form-control" placeholder="Enter Email Address"
                                onBlur={this.inputChange}
                                ></input>
                                <InputErrors errors={this.state.username.errors}></InputErrors>
                        </div>
                        <div className="col-md-4 offset-md-2">
                            <label htmlFor="exampleInputEmail1">Passowrd</label>
                            <input type="password" name="password" className="form-control" placeholder="Enter Password"
                                onBlur={this.inputChange}
                            ></input>
                            <InputErrors errors={this.state.password.errors}></InputErrors>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block"  value="submit"></input>
                </form>
            </div>
        </>
        )
    }
}
export default Login;