import React from 'react';
import Cookies from 'js-cookie';

import {navProps} from '../nav.js';
import {Navbar,Nav,Fade,Dropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import GoToHomePage from './goToHomePageLogo';


    
    
class BuildNavigation extends React.Component {

    constructor() {
        super();
        this.state = {
            activeMenu:-1,
            popupLoginActive: false,
            active:null,
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

    handleLogout = async () => {
        await Cookies.remove('login')
        await this.setState({
            activeUser:null
        })
        await window.location.assign('http://localhost:3001/')
    }

    componentDidMount () {
        const user = Cookies.get('login');
        if(user){
            this.setState({
                activeUser:JSON.parse(user),
            })
        }      
    }

    render() {
        return( 
            <Navbar style = {{height:'50px',position:'relative'}} collapseOnSelect expand = "lg" bg = "dark" variant = "dark">
                <Navbar.Brand href = "/"><GoToHomePage/></Navbar.Brand>
                <Navbar.Toggle variant = "dark" bg = "dark" aria-controls = "responsive-navbar-nav" />
                <Navbar.Collapse style={{backgroundColor:'#343a40',display:'flex'}} id = "responsive-navbar-nav">
                    <Nav style={{width:'100%',zIndex:'999'}} className='d-flex flex-row justify-content-around'>
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
                                                                        <Link to='/apartments' style = {{fontSize:'14px',color:'white',textDecoration:'none'}} key = {i}>{item.title}</Link>
                                                                    </div>
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
                        : <Link style={upperLinksStyle} to='/login_page'>Login</Link>
                        }   

                        {!this.state.activeUser &&
                            <Link style={upperLinksStyle} to='/registration_page'>Register</Link>
                            }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>                    
        );
    }
}
            
export default BuildNavigation;

const fadeStyle={display:"flex",position:"absolute",background: 'linear-gradient(74deg, rgba(102,107,154,1) 0%, rgba(93,100,103,1) 0%, rgba(41,29,29,1) 100%)',zIndex:"999",left:"0",width:'100%',top:'50px',transition:'1s'};
const upperLinksStyle={margin:'0 5px',textDecoration:'none',color:'rgba(255,255,255,.5)'}