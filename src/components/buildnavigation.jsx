import React from 'react';
import {navProps} from '../nav.js';
import coloredIphoneImg from '../imgs/color-iphone.png';
import realtorH from '../imgs/realtor-h.png';
import realtorTV from '../imgs/realtor-tv.jpg';
import {Navbar,Nav,Fade,Dropdown} from 'react-bootstrap';
import whiteiphone from '../imgs/whiteiphone.png';
import Popup from './loginpage.jsx';
import Signup from './signuppage.jsx';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom';


    
    
class BuildNavigation extends React.Component {
        constructor() {
            super();
            this.state = {
                activeMenu:-1,
                popupLoginActive: false,
                change:false,
                active:null,
                iphoneactive:false,
                popupSignupActive:false,
                activeUser:null
            }
        }
        changeActiveMenu = (index,activeMenu) => {
            this.setState({
                activeMenu: activeMenu === index ? -1 :index
            })
        }
  
        active = (num) => {
            this.setState({
                active:num
            })
        };
        iphoneactive = () => {
            this.setState({
                iphoneactive:!this.state.iphoneactive
            })
        }
        handleLogin = (e) => {
            e.preventDefault();
            this.setState({
                popupLoginActive:!this.state.popupLoginActive,
            })
        }
        handleSignup = (e) => {
            e.preventDefault();
            this.setState({
                popupSignupActive:!this.state.popupSignupActive,
            })
        }
        handleLogout = () => {
            this.setState({
                activeUser:null
            })
        }
        componentDidMount(){
            const user = Cookies.get('login');
            if(user){
                this.setState({
                    activeUser:JSON.parse(user),
                },() => console.log(this.state.activeUser.first_name))
            }      
        }
        render() {
            return( 
            <Navbar style = {{height:'50px',position:'relative'}} collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
                <Navbar.Brand href = "http://localhost:3000/"><svg className = {'mr-1 d-none d-md-flex'} xmlns="http://www.w3.org/2000/svg" width="156" height="29" viewBox="0 0 445 82"><g fill="none"><path fill="#D52331" d="M31.8 41.7c-2.8 0-4.3-1.2-5-3.4-.9-2-.7-3-2.7-3-2.1 0-7 5.7-7.7 13.5l-.2 9V65c0 3.1-.2 7 .4 9.4.5 3 1.4 3.4 3.8 4.5l1.7.5v.3H.5v-.3c.5 0 1-.2 1.8-.5 2.4-1 3-1.4 3.6-4.5.6-2.3.4-6.3.4-9.4V45c0-2 .1-7.6-.1-9.3-.4-2.2-1-2.9-2-3.7-1.1-1-2.3-1-3-1v-.3h14.4c.7 0 .7.3.7.7v13.2c1.4-5.8 4.4-9.5 6-11 1.7-1.8 4.7-3.9 8.3-3.9 1.8 0 3.7.5 5 1.8 1 1 1.6 2.5 1.6 4.9 0 2.8-1.7 5.4-5.4 5.4"></path><path fill="#252521" d="M248.4 41.7c-2.8 0-4.3-1.2-5-3.4-.9-2-.7-3-2.7-3-2.1 0-7 5.7-7.7 13.5l-.2 9V65c0 3.1-.2 7 .4 9.4.5 3 1.3 3.4 3.8 4.5l1.7.5v.3H217v-.3c.5 0 1-.2 1.7-.5 2.5-1 3.2-1.4 3.7-4.5.6-2.3.4-6.3.4-9.4V45c0-2 .1-7.6-.1-9.3-.4-2.2-1-2.9-2-3.7-1.2-1-2.3-1-3-1v-.3h14.4c.7 0 .7.3.7.7v13.2c1.4-5.8 4.4-9.5 6-11 1.6-1.8 4.6-3.9 8.3-3.9 1.8 0 3.7.5 5 1.8 1 1 1.6 2.5 1.6 4.9 0 2.8-1.7 5.4-5.4 5.4"></path><path fill="#D52331" d="M63 34a9.2 9.2 0 0 0-6.4-2.1 8 8 0 0 0-6 2.2c-2.5 2.2-4 7.5-4.3 15H63c3.3 0 3.7-.1 3.7-4.3 0-5.8-1.8-9.3-3.6-10.8zm13.8 17.4H46.3c0 13.5 1.8 17.6 5.1 21.4 2.7 3 5.1 3.9 8.5 3.9 9.2 0 14.3-4.7 16-12.8h.5C74.3 74 67.9 80.7 58 80.7a22 22 0 0 1-16.3-5.9c-4.6-5-6.3-11-6.3-19.2 0-15.5 8.9-25.9 21.1-25.9 14.2 0 20.4 9.6 20.4 18.6v3.2zm19.6 5.4c-3.2 1.7-4.6 2.9-5.7 4.5-1.1 1.8-1.8 4-1.8 7.2 0 6.5 2.5 8 7.2 8 .9 0 2-.2 2.8-.7 2.5-1.2 6-5 6-8.6V51c-1.5 2.6-5.4 4.2-8.5 5.8zm17.1 23.8c-2.7 0-5-.1-6.3-1-1.5-.7-2.6-3-2.3-7.3h-.1c-1.2 4-6.4 8.3-13.8 8.3-6.8 0-12.8-4-12.8-12.2 0-3.1.9-5.6 2.8-7.4 3.6-3.4 8.5-3.6 13.4-5.5 6.6-2.6 10.8-5.7 10.8-9.2l.2-7.4c0-6.2-2.9-7.2-7.8-7.2-2.4 0-4 .4-5 1.6s-1.7 2.2-1.7 5.6c0 3.6-2 5.1-5.2 5.1-2.6 0-4.7-1.4-4.7-4.4A7 7 0 0 1 83 35c2.5-3.2 9.6-5.2 14.5-5.2 8.6 0 18 3.1 18 11.3l-.1 28.9v4.5c.2 2 .7 4 2.9 4.5a4 4 0 0 0 3-.5v.1c-1.1 1-4 2.1-7.7 2.1zm7.9-1v-.3c.5 0 1.4-.3 2-.5 1.9-.8 2.8-1.5 3.4-4.5.5-2.2.5-6 .5-9.3V14.8c0-2 0-7.5-.3-9.2-.3-2.2-.9-3-2-3.7-1.2-1-2.1-1-3-1V.6h14.6c.7 0 .7 0 .7.8l-.1 7.3V65c0 3.3-.1 7 .3 9.3.7 3 1.5 3.7 4 4.6l1.5.4v.3h-21.6"></path><path fill="#252521" d="M174.6 73.2a14 14 0 0 1-11.8 7.4c-4.5 0-7.5-.7-10-3-2.1-1.8-3-4.1-3-8.4l.4-37.9c-1.7 0-5 0-6.8-.3v-.2c7.2-1.7 11.7-5.4 16.5-21h.4V29h11.4v2.2h-11.4l-.5 38.8c0 4.4 1.3 8.2 5.9 8.2 4 0 7.1-2.4 8.5-5.2l.4.2"></path><path fill="#252521" d="M201.7 35.2a9 9 0 0 0-7.6-3.3c-2.6 0-5.3.9-7.5 3.2-3.5 3.6-5.4 11.1-5.4 19.9 0 9 2 16 5.3 19.8 2.3 2.8 5 3.5 7.6 3.5 2.6 0 5.2-.6 7.6-3.3 3.1-3.8 5.3-11 5.3-20 0-8.9-2-16-5.3-19.8zm-7.6 45.4A24.7 24.7 0 0 1 170.4 55a24.5 24.5 0 0 1 23.7-25.4c11.4 0 23.8 9.7 23.8 25.4A24.8 24.8 0 0 1 194 80.6zm141.6-45.4a9 9 0 0 0-7.6-3.3c-2.6 0-5.3.9-7.5 3.2-3.5 3.6-5.4 11.1-5.4 19.9 0 9 2 16 5.3 19.8 2.3 2.8 5 3.5 7.6 3.5 2.6 0 5.2-.6 7.6-3.3 3.1-3.8 5.3-11 5.3-20 0-8.9-2-16-5.3-19.8zm-7.6 45.4A24.7 24.7 0 0 1 304.4 55a24.5 24.5 0 0 1 23.7-25.4c11.4 0 23.8 9.7 23.8 25.4A24.9 24.9 0 0 1 328 80.6zm-73.9.7a6.1 6.1 0 0 1-6.1-6.3c0-3.7 2.8-6.4 6.1-6.4 3.4 0 6.1 2.3 6.1 6.4 0 4-2.7 6.3-6 6.3m32-.7c-6.3 0-12-2.4-15.7-6.1-4.7-4.8-6.6-11.7-6.6-20 0-15.7 12-24.9 22.4-24.9 7.2 0 12.5 2.7 14.6 5.2 1.6 2 2.4 3.7 2.4 5.3 0 3.6-2.7 5-4.7 5-4 0-5.4-2.5-5.8-6.2-1-6.5-2-7.4-7-7.4-1.9 0-5 .8-6.9 3-2.6 3-4 9-4 18 0 11.4 1.4 15.8 4.4 20.2 2.2 3.3 5 4 7.6 4 10.4 0 15-6 16.6-12.8l.5.1c-2.1 9.1-8.1 16.6-17.8 16.6"></path><path fill="#252521" d="M411 79.6v-.2l1.7-.6c2.3-1 3.1-1.5 3.7-4.6.6-2.3.5-6 .5-9.3V45c0-5.4-.5-7.9-1.8-9.6-1.5-2-3.3-3-6.3-3-5.2 0-11 8.9-11.8 17.8l-.2 5.3v9.5c0 3.3-.3 7 .3 9.3.6 3 1.5 3.7 3.8 4.6l1.8.6v.2H381v-.2l1.7-.6c2.3-1 3.1-1.5 3.7-4.6.6-2.3.5-6 .5-9.3V45c0-5.4-.6-7.9-1.9-9.6-1.5-2-3.3-3-6.3-3-5.8 0-11 9.1-11.8 18-.2 2.8-.2 1.7-.2 5.2v9.4c0 3.3-.3 7 .3 9.4.6 3.1 1.5 3.5 4 4.5l1.5.6v.2h-21.5v-.2l1.7-.6c2.4-1 3-1.4 3.7-4.5.6-2.3.4-6.1.4-9.4V45c0-2 0-7.5-.2-9.3-.3-2.2-.8-2.7-2-3.7-1.1-.9-2.1-.9-3-1v-.2h14.6c.7 0 .7 0 .7.7l-.2 11.3a17 17 0 0 1 16.1-13c5.1 0 8.7 1.4 10.8 4 1.1 1.3 3 4.6 3 9.3 1.6-5.4 4.3-8.4 6.8-10.1a18 18 0 0 1 9.4-3.3c6.4 0 9.3 2 11 4.2 1.5 1.7 2.8 4.8 2.8 10.7V65c0 3.3-.1 7 .4 9.3.6 3 1.4 3.6 3.8 4.6l1.7.6v.2H411m27.5-48.5c.5 0 .8-.1 1-.3.3-.2.4-.5.4-.8a1 1 0 0 0-.3-.9c-.3-.2-.6-.2-1-.2h-1.8V31h1.7zm-3-3.5h3c1 0 1.7.3 2.2.8.4.4.6.9.6 1.5s-.1 1-.4 1.4c-.4.4-.7.6-1.2.7l1.9 2.7H440l-1.7-2.4h-1.5v2.4h-1.4v-7zm2.6 9.6a5.6 5.6 0 0 0 4.1-1.8 5.7 5.7 0 0 0 1.7-4 5.8 5.8 0 0 0-1.6-4.1 5.8 5.8 0 0 0-9.9 4v.1a5.7 5.7 0 0 0 3.5 5.3c.7.3 1.4.5 2.2.5zm0 .8a6.5 6.5 0 0 1-4.6-2 6.7 6.7 0 0 1-2-4.6 6.4 6.4 0 0 1 2-4.7 6.7 6.7 0 0 1 4.7-2 6.5 6.5 0 0 1 6 4 6.4 6.4 0 0 1 0 5.1 6.7 6.7 0 0 1-6 4.2z"></path></g></svg></Navbar.Brand>
                <Navbar.Toggle aria-controls = "responsive-navbar-nav" />
                <Navbar.Collapse id = "responsive-navbar-nav">
                    <Nav className = "mr-auto">
                        {navProps.map((data,i) => {
                        return(
                            <Nav.Link key = {i} onMouseOver = {() => this.active(i)} onMouseOut = {() => this.active(-1)}>
                            <h1 style={{fontSize:"14px"}}>{data.label}</h1>
                            <Fade in = {this.state.active === i} unmountOnExit = {true} style = {fadeStyle}>
                        <ul>
                            {
                            data.innerMenu.map((lis,i) => {
                                return(
                                    <li key = {i} style = {{width:"100%"}}>
                                        
                                        {lis.slice(1).map((item,i) => {
                                            return (
                                                <div key = {i}>
                                                <h5 className = {'h5gradient'}>{lis[i].headtitle}</h5>
                                                <p style = {{fontSize:'14px'}} key = {i}>{item.title}</p></div>
                                            )
                                        })}
                                    </li>
                                );
                            })
                            }
                        </ul>
                    </Fade>
                </Nav.Link>
            );
        })}
    </Nav>
    <Nav>
        <Nav.Link style = {{position: 'relative'}} href = '/' onMouseOver = {() => this.iphoneactive()} onMouseOut = {() => this.iphoneactive()}><img style = {{width:'35px',cursor:'pointer',position:'relative'}} src = {whiteiphone} alt = ""/>
            <Fade style = {iphoneFadeStyle} in = {this.state.iphoneactive} unmountOnExit = {true}>
                <div>
                    <div style = {{display:'flex',justifyContent:'space-around',borderBottom:'1px solid grey'}}>
                        <div style = {{display:'flex',justifyContent:'center',alignItems:'center',marginLeft:'10px'}}><img style = {{height:'50px'}} src = {coloredIphoneImg} alt = ""/></div>
                        <div style = {{marginTop:'10px'}}>
                            <p style = {{color:'black'}}>Realtor.com® mobile apps</p>
                            <p style = {{color:'black'}}>Find homes for sale or rent oniPhone, iPad, and Android</p>
                        </div>
                    </div>
                    <div style = {{display:'flex',justifyContent:'space-around',marginBottom:'5px'}}>
                        <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}><img style={{height:'50px'}} src={realtorH} alt=""/></div>
                        <div style = {{marginTop:'10px'}}>
                            <p style = {{color:'black'}}>Realtor.com® Real Estate</p>
                            <div style = {{display:'flex',justifyContent:'center'}}>
                                <a className = {'text-decoration-none text-dark'} href='/'>iOS</a>
                                <span className = {'text-dark'}>|</span>
                                <a className = {'text-decoration-none text-dark'} href='/'>Android</a>
                            </div>
                        </div>
                    </div>
                    <div style = {{display:'flex',justifyContent:'space-around'}}>
                        <div style = {{display:'flex',justifyContent:'center',alignItems:'center'}}><img style={{height:'50px'}} src={realtorTV} alt=""/></div>
                        <div style = {{marginTop:'10px'}}>
                            <p style = {{color:'black'}}>Realtor.com® Rentals</p>
                            <div style = {{display:'flex',justifyContent:'center'}}>
                                <a className = {'text-decoration-none text-dark'} href='/'>iOS</a>
                                <span className = {'text-dark'}>|</span>
                                <a className = {'text-decoration-none text-dark'} href='/'>Android</a>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </Nav.Link>
        {this.state.activeUser ?
             <Dropdown style={{marginTop:'5px'}}>
                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                    Hello {this.state.activeUser.first_name} 
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">
                        <Nav.Link style={{color:'black'}} href='/user_profile'>
                            Go to Profile
                        </Nav.Link>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={this.handleLogout} href="#/action-2">
                        Log Out
                    </Dropdown.Item>
             </Dropdown.Menu>
           </Dropdown>
           
            : <Nav.Link onClick = {(e) => this.handleLogin(e)} >Log In</Nav.Link>
        }
        {/* <Nav.Link onClick = {(e) => this.handleLogin(e)} >Log In */}
      {this.state.popupLoginActive && <Popup handleLogin = {this.handleLogin}/>}
      <Nav.Link href = "/">Advertise</Nav.Link>
      <Nav.Link onClick={(e) => this.handleSignup(e)} >Sign Up</Nav.Link>
      {this.state.popupSignupActive && <Signup handleSignup = {this.handleSignup}/>}
    </Nav>
  </Navbar.Collapse>
</Navbar>                    
        );
    }
}
            
export default BuildNavigation;
const fadeStyle={display:"flex",position:"absolute",background: 'linear-gradient(74deg, rgba(102,107,154,1) 0%, rgba(93,100,103,1) 0%, rgba(41,29,29,1) 100%)',zIndex:"999",left:"0",width:'100%',top:'50px',transition:'1s'};
const iphoneFadeStyle={background: 'white',position:'absolute', width: '300px', top:'50px',right:'0'};
