import React from 'react';
import validate, {field} from '../validator';
import InputErrors from '../inputError'; 

class StudentForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: field({name: 'username', isRequired:true, minLength: 2}),
            email: field({name: 'email', isRequired: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})
        }

        this.inputChange = this.inputChange.bind(this);
    }  

    //Bind the function will use the prototype chain, Ya'ani - 1 method per class
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

    //Each object will have this onSubmit method - Ya'ani - 1 method per object!  A copy
    onSubmit = e => {
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
        }
    }
    render() {
        return (<>
            <div className="alert alert-success" role="alert">
                <h4 className="alert-heading text-center">Student Details</h4>
                <p className="text-center">
                    Hello Student! Please fill in your details
                </p>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className="row form-group">
                        <div className="col-md-4 offset-md-1">
                            <label htmlFor="exampleInputEmail1">Username</label>
                            <input type="text" name="username" className="form-control" placeholder="Enter Username"
                                onBlur={this.inputChange}
                                ></input>
                                <InputErrors errors={this.state.username.errors}></InputErrors>
                        </div>
                        <div className="col-md-4 offset-md-2">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter Email"
                                onBlur={this.inputChange}
                            ></input>
                            <InputErrors errors={this.state.email.errors}></InputErrors>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary btn-block"  value="submit"></input>
                </form>
            </div>
        </>)
    }
}
export default StudentForm;