import React from 'react';

import {Link} from 'react-router-dom';

import Price from './price';
import Address from './address';
import Garbage from './garbage';
import Deny from './deny';
import Approval from './approval';
import Recover from './recover';
import SaleStatus from './saleStatus';

class BuildCard extends React.Component {
    render() {
        const {id,price,number_of_bath,number_of_room,label,name,country,sale_status} = this.props;
        const mainImageUrl = `url('http://localhost:3000/${this.props.main_image}')`;
        return(
            <div className = {"card-wrapper col-lg-3 col-md-4 col-sm-6 py-3"}>
               <Link className = {'text-decoration-none text-dark'} to={this.props.apartment_id ? `/apartment/${this.props.apartment_id}` : `/apartment/${this.props.id}`}> 
                    <div className = {"image-wrapper"} style={{height: "200px", backgroundImage:mainImageUrl,backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'relative'}}>
                        <div style={priceWrapperStyle}>
                            <p style={{fontSize:'25px',marginBottom:'0'}}><Price price={price}/></p>
                        </div>
                    </div>
                    <ul style = {{listStyle:'none'}} className = {"text-wrapper d-flex justify-content-between"}>
                        {this.props.number_of_bath?<li><span className = {'bold'}>{number_of_bath}</span> beds</li>:<li>{country}</li>}
                        {this.props.number_of_room?<li><span className = {'bold'}>{number_of_room}</span> baths</li>:<li>{name}</li>}
                        {this.props.sqft?<li><span className = {'bold'}>{this.props.sqft}</span> sqft</li>:<li>{label}</li>}
                    </ul>
                    <div style={{display:'flex',justifyContent:'space-around'}}>
                        <Address address = {this.props.address}/>
                        <SaleStatus sale_status={this.props.sale_status}/>
                    </div>
                </Link>
                {window.location.href==='http://localhost:3002/my_apartments' && <Garbage id={id}  className='garbage'/>}
                {window.location.href==='http://localhost:3002/approved_apartments' && <Garbage id={id}  className='garbage'/>}
                {window.location.href==='http://localhost:3002/pending_apartments' && <Approval id={id} className='approval'/>}
                {window.location.href==='http://localhost:3002/pending_apartments' && <Deny id={id} className='deny'/>}
                {window.location.href==='http://localhost:3002/removed_apartments' && <Recover id={id} className='recover'/>}
            </div>
        );
    }
}
export default BuildCard;
const priceWrapperStyle = {position:'absolute',bottom:'0',right:'5%'};
