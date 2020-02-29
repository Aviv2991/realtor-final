import React from 'react';

class Price extends React.Component {
    render() {
        let curPrice = this.props.price/1000000
        return(
            <div>
                {this.props.price ?
                    <span className = {'bold price'}>{curPrice} M $</span> 
                : <div></div>}
            </div>
        );
    }
}
export default Price; 