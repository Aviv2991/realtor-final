import React from 'react';

class Price extends React.Component {

    numberWithCommas = (num) =>{
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    
    render() {
        
        return(
            <div>
                <p className = {'bold price text-dark mb-0'}>{this.numberWithCommas(this.props.price)} $</p> 
            </div>
        );
    }
}
export default Price; 