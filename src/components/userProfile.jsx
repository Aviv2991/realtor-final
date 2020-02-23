import React from 'react';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom';
import AdminPage from './adminPage';
import {ButtonGroup,Button} from 'react-bootstrap';

class Profile extends React.Component {
    constructor(){
        super();
        this.state={
            userId:JSON.parse(Cookies.get('login')).id
        }
    }
    render() {
        console.log(this.state.userId)
        const curUserCookieToJson = JSON.parse(Cookies.get('login'));
        const name = curUserCookieToJson.first_name;
        return (
  
            
            <div>
                {this.state.userId === 1 ?
                    <AdminPage/> 
                    :
                    <div className="d-flex flex-column">
                        <h2 style = {{textAlign:'center',margin:'5% 0'}}>Hello Dear {name} !</h2>
                        <ButtonGroup size="lg">
                            <Button><Link style={linkStyle} to='/new_apartment'>Add New Apartment</Link></Button>
                            <Button><Link style={linkStyle} to='/my_apartments'>Show me my properties!</Link></Button>
                            <Button><Link style={linkStyle} to='/my_wish_list'>Show me the properties i liked!</Link></Button>
                        </ButtonGroup>
                        
                        
                        
                    </div>
                }
                
            </div>
        );
    }
}
export default Profile;
const linkStyle={color:'white',textDecoration:'none'}