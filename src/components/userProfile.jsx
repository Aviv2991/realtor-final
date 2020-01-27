import React from 'react';
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom';

class Profile extends React.Component {
    render() {
        const curUserCookieToJson = JSON.parse(Cookies.get('login'));
        const name = curUserCookieToJson.first_name;
        console.log(name)
        return (
            <div>
                <h2 style = {{textAlign:'center'}}>Hello Dear {name} !</h2>
                <Link to='/new_apartment'>Add New Apartment</Link>
                <Link to='/my_apartments'>Show me my properties!</Link>
                <Link to='/my_wish_list'>Show me the properties i liked!</Link>
                {/* {Cookies.get('login')}'s Profile */}
            </div>
        );
    }
}
export default Profile;