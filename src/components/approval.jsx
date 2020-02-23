import React from 'react';
import {approveApartmentById} from '../api/controllers/apartments';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';

class Approve extends React.Component{
    constructor(props){
        super(props);
    }
    handleApproval=async()=>{
        const apartmentId = this.props.id;
        await approveApartmentById(apartmentId);
        await window.location.reload();

    }
    render(){
        

        function renderTooltip(props) {
            return <Tooltip {...props}>Approve Apartment</Tooltip>;
          }
        return(
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <div onClick={this.handleApproval} className={this.props.className}>
                    <i class="fas fa-thumbs-up"></i> 
                </div>
            </OverlayTrigger>

        )
    }
}
export default Approve;