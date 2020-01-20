import React from 'react';
import Cookies from 'js-cookie';
import validate, {field} from '../validator';
import InputErrors from '../inputError';
import {login} from '../api/controllers/login';

class Popup extends React.Component{
    constructor(props){
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
                window.location.reload();
            }
            console.log(Cookies.get('login'));
        }
    }  
    render(){
        return(
            <div style={{position:'relative'}}>
                <div style={loginWrapperStyle}>
                <button onClick={this.props.handleLogin} style={xBtnStyle}>X</button>
                <div style={leftDivWrapperStyle}>
                    <h2 style={h2Style}>Log in to your account</h2>
                    <p style={{marginBottom:'0'}}>Access all your saved properties, searches, notes and more.</p>
                    <form style={formStyle} onSubmit={this.onSubmit}>
                        <input style={loginInputStyle} placeholder='Email Address' type="email"
                        name="username"
                        onBlur={this.inputChange}/>
                        <input style={loginInputStyle} placeholder="Password" type="password"
                        name="password"
                        onBlur={this.inputChange}/>
                        <a style={forgotPassStyle} href="/">Forgot Password?</a>
                        <div style={innerLoginWrapperStyle}>
                            <input type="submit" style={loginButtonStyle} value="LOG IN"></input>
                            <a style={{fontSize:'14px',color:'grey',marginLeft:'10px'}} href="/">No account? Sign Up</a>
                        </div>
                        <button style={loginWithFacebookStyle}>Or, Log in with Facebook</button>
                        <button style={loginWithGoogleStyle}><img alt='/' style={{height:'25px',marginRight:'20px'}} src="https://img.icons8.com/color/48/000000/google-logo.png"/>Log in with Google</button>
                    </form>
                </div>
                <div style={rightDivStyle}>
                    <h2 style={h2Style}>Real estate professional?</h2>
                    <p>Manage your profile, leads,listings and more.</p>
                    <button style={proLoginStyle}>Pro Log in</button>
                    <a style={{color:'#1287a8',textDecoration:'none',display:'block'}} href="/">No professional account? Sign up here</a>
                        <img style={bottomImgStyle}  src="https://d31jv8wslxbg1z.cloudfront.net/img/house_login_web.png" alt="pro-login-img" data-testid="pro-signup-img"/>

                </div>
                
                </div>
            </div>
        );
    }
}
export default Popup;

//STYLING//
const loginInputStyle={width:'400px',height:'45px',fontSize:'14px',padding:'6px 12px',marginBottom:'10px'}
const loginButtonStyle={background:'rgb(217, 34, 40)',color:'white',width:'165px',padding:'6px 16px',fontSize:'14px',borderRadius:'30px',fontWeight:'bold'}
const loginWithFacebookStyle={color:'white',fontWeight:'bold',width:'415px',background:'rgb(57, 88, 155)',padding:'6px 16px',margin:'24px 0',borderRadius:'30px'}
const proLoginStyle={background:'rgb(0, 153, 204)',color:'white',width:'180px',borderRadius:'30px',margin:'24px 0'}
const loginWithGoogleStyle={border:'1px solid rgb(196, 196, 196)',borderRadius:'30px',background:'white',width:'415px',padding:'6px 16px',fontSize:'14px',margin:'0 0 24px 0'}
const loginWrapperStyle={boxShadow:'8px 8px 8px 8px',position:'absolute',top:'55px',right:'75px',width:'900px',display:'flex',backgroundColor:'white',zIndex:'1000'}
const xBtnStyle={border:'none',backgroundColor:'white',fontSize:'20px',fontWeight:'bold',position:'absolute',top:'10px',right:'10px'}
const leftDivWrapperStyle={width:'50%',margin:'25px',textAlign:'left'}
const h2Style={fontSize:'24px',marginBottom:'10px'}
const formStyle={marginTop:'10px',display:'flex',flexDirection:'column',justifyContent:'left'}
const forgotPassStyle={color:'grey',fontSize:'14px',textDecoration:'none',display:'block'}
const innerLoginWrapperStyle={display:'flex',marginTop:'30px',marginLeft:'15px'}
const rightDivStyle={position:'relative',marginTop:'35px',textAlign:'left'}
const bottomImgStyle={width:'400px',height:'100px',position:'absolute',bottom:'0',left:'0'}