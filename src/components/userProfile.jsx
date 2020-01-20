import React from 'react';
import Cookies from 'js-cookie';

class Profile extends React.Component {
    render() {
        const curUserCookieToJson = JSON.parse(Cookies.get('login'));
        const name = curUserCookieToJson.first_name;
        console.log(name)
        return (
            <div>
                <h2 style = {{textAlign:'center'}}>Hello Dear {name} !</h2>
                <h4 style = {{textAlign:'center'}}></h4>
                {/* {Cookies.get('login')}'s Profile */}
            </div>
        );
    }
}
export default Profile;