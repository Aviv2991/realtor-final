import React from 'react';
import validate, {field} from '../validator';
import {signup} from '../api/controllers/signup';
import Cookies from 'js-cookie';

class Signup extends React.Component{
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
            const response = await signup(values);
            if(response){
                window.location.reload();
            }
            console.log(Cookies.get('login'));
        }
    } 

    render(){
        return(
            <div style={{position:'relative'}}>
                <div style={signUpWrapper}>
                <button onClick={this.props.handleSignup} style={xBtnStyle}>X</button>
                <div style={leftDivStyle}>
                    <h2 style={h2Style}>Welcome to realtor.com</h2>
                    <p style={{marginBottom:'0'}}>Sign up to get property updates, home search tips and local insights via email.</p>
                    <form style={formStyle} action=""  onSubmit={this.onSubmit}>
                        <input onBlur={this.inputChange} name = "first_name" style={loginInputStyle} placeholder='First Name' type="text"/>
                        <input onBlur={this.inputChange} name = "last_name" style={loginInputStyle} placeholder='Last Name' type="text"/>
                        <input onBlur={this.inputChange}  name = "email" style={loginInputStyle} placeholder='Email' type="email"/>
                        <input onBlur={this.inputChange} name = "password" style={loginInputStyle} placeholder='Password' type="password"/>
                        <input onBlur={this.inputChange} name = "phone" style={loginInputStyle} placeholder="888 888 8888" type="text" />
                        <div style={innerSignupStyle}>
                            <input type="submit" style={loginButtonStyle} value="SIGN UP"></input>

                            <a style={{fontSize:'14px',color:'grey',marginLeft:'10px'}} href="/">Registered? Log In</a>

                        </div>
                        <button style={loginWithFacebookStyle}>Or, Sign up with Facebook</button>
                        <button style={loginWithGoogleStyle}><img style={{height:'25px',marginRight:'20px'}} alt='/' src="https://img.icons8.com/color/48/000000/google-logo.png"/>Log in with Google</button>
                    </form>
                    <p style={{fontSize:'14px'}}>By creating an account you agree to our <a style={{color:'black'}} href="/">Terms of Use</a>  and <a style={{color:'black'}} href="/">Privacy Policy</a> .</p>
                </div>
                </div>
            </div>
        );
    }
}
export default Signup;

//STYLING//
const loginInputStyle={width:'400px',height:'45px',fontSize:'14px',padding:'6px 12px',marginBottom:'10px'}
const loginButtonStyle={background:'rgb(217, 34, 40)',color:'white',width:'165px',padding:'6px 16px',fontSize:'14px',borderRadius:'30px',fontWeight:'bold'}
const loginWithFacebookStyle={color:'white',fontWeight:'bold',width:'415px',background:'rgb(57, 88, 155)',padding:'6px 16px',margin:'24px 0',borderRadius:'30px'}
const loginWithGoogleStyle={border:'1px solid rgb(196, 196, 196)',borderRadius:'30px',background:'white',width:'415px',padding:'6px 16px',fontSize:'14px',margin:'0 0 24px 0'}
const signUpWrapper={boxShadow:'8px 8px 8px 8px',position:'absolute',top:'55px',right:'235px',width:'900px',display:'flex',backgroundColor:'white',zIndex:'1000'}
const xBtnStyle={border:'none',backgroundColor:'white',fontSize:'20px',fontWeight:'bold',position:'absolute',top:'10px',right:'10px'}
const leftDivStyle={margin:'25px',textAlign:'left'}
const h2Style={fontSize:'24px',marginBottom:'10px'}
const formStyle={marginTop:'10px',display:'flex',flexDirection:'column',justifyContent:'left'}
const innerSignupStyle={display:'flex',marginTop:'30px',marginLeft:'15px'}