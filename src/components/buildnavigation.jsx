import React from 'react';
import Cookies from 'js-cookie';

import {Navbar,Nav,Dropdown,Button} from 'react-bootstrap';
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
                    {this.state.activeUser && 
                    <div style={{display:'flex',width:'100%',justifyContent:'space-around'}}>
                        <Link to='/apartments'><Button variant="secondary">Buy</Button></Link>
                        <Link to='/apartments'><Button variant="secondary">Rent</Button></Link>
                        <Link to='/new_apartment'><Button variant="secondary">Sell</Button></Link>
                    </div>
                    }
                    <Nav style={{width:'100%',zIndex:'999'}} className='d-flex justify-content-end'>
                        
                       
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

const upperLinksStyle={margin:'0 5px',textDecoration:'none',color:'rgba(255,255,255,.5)'}


