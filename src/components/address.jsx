import React from 'react';

import '../styling/address.css';

class Address extends React.Component {
    render() {
        return(
            <div className = {'address'}>    
                <span className='bold'>
                    {this.props.address}
                </span>
            </div> 
       );
    }
}
export default Address;