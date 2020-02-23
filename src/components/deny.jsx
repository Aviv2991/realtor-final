import React from 'react';
import {denyApartmentById} from '../api/controllers/apartments';
import {OverlayTrigger,Tooltip} from 'react-bootstrap';

class Deny extends React.Component{
    constructor(props){
        super(props);
    }
    handleDenying= async ()=>{
        const apartmentId = this.props.id;
        await denyApartmentById(apartmentId);
        await window.location.reload()
    }
    render(){
        function renderTooltip(props) {
            return <Tooltip {...props}>Deny Apartment</Tooltip>;
          }
       
        return(
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <div onClick={this.handleDenying} className={this.props.className}>
                    <i class="fas fa-thumbs-down"></i> 
                </div>
            </OverlayTrigger>
        )
    }
}
export default Deny;