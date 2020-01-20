import React from 'react';
import {Link} from 'react-router-dom';
import Rectangel from './rectangle';
import Heart from './heart';
import Price from './price';
import Address from './address';
import EmailAgent from './emailagent';
class BuildCard extends React.Component {
    render() {
        const {id,main_image,price,number_of_bath,number_of_room,address,sqft,label,name,country} = this.props;
        const mainImageUrl = `url('http://localhost:3000/${main_image}')`;
        return(
            <div className = {"card-wrapper col-lg-3 col-md-4 col-sm-6 py-3"}>
               <Link className = {'text-decoration-none text-dark'} to={`/apartment/${id}`}> 
                <div className = {"image-wrapper"} style={{height: "200px", backgroundImage:mainImageUrl,backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'relative'}}>
                    {number_of_room &&<Rectangel/>}
                    {number_of_room &&<Heart className={'stickToTopAndRight'}/>}
                    <Price price={price}/>
                </div>
                <ul style = {{listStyle:'none'}} className = {"text-wrapper d-flex justify-content-between"}>
                    {number_of_bath?<li><span className = {'bold'}>{number_of_bath}</span> beds</li>:<li>{country}</li>}
                    {number_of_room?<li><span className = {'bold'}>{number_of_room}</span> baths</li>:<li>{name}</li>}
                    {sqft?<li><span className = {'bold'}>{sqft}</span> sqft</li>:<li>{label}</li>}
                </ul>
                <Address address = {address}/>
                <EmailAgent beds = {number_of_room}/>
                </Link>
            </div>
        );
    }
}
export default BuildCard;
