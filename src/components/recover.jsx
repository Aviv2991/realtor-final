import React from 'react';
import {approveApartmentById} from '../api/controllers/apartments';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';

class Recover extends React.Component{
    constructor(props){
        super(props);
    }
    handleRecovery= async ()=>{
        const apartmentId = this.props.id;
        await approveApartmentById(apartmentId);
        await window.location.reload();
    }

    render(){
        function renderTooltip(props) {
            return <Tooltip {...props}>Recover Apartment</Tooltip>;
          }
        return(
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <div onClick={this.handleRecovery} className={this.props.className}>
                    <i class="fas fa-sync-alt"></i> 
                </div>
            </OverlayTrigger>
        )
    }
}
export default Recover;