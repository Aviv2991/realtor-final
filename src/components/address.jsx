import React from 'react';
class Address extends React.Component {
    render() {
        return(
            <div className = {'address'}>    
                <span>
                    {this.props.address}
                </span>
            </div> 
       );
    }
}
export default Address;