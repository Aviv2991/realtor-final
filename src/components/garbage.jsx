import React from 'react';
import {Tooltip,OverlayTrigger} from 'react-bootstrap';
import {deleteApartmentById} from '../api/controllers/apartments';


class Garbage extends React.Component{
    constructor(props){
        super(props);
    }
    handleDeletion=async ()=>{
        const apartmentId =this.props.id;
        console.log(apartmentId)
        await deleteApartmentById(apartmentId)
        await window.location.reload();
    }
    render(){
        function renderTooltip(props) {
            return <Tooltip {...props}>Delete Apartment</Tooltip>;
          }
        return(
            <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <div onClick={this.handleDeletion} className={this.props.className}>
                    <i class="fas fa-trash-alt"></i> 
                </div>
            </OverlayTrigger>
        )
    }
}
export default Garbage;


