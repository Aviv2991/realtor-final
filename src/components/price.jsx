import React from 'react';

class Price extends React.Component {
    render() {
        return(
            <div>
                {this.props.price ?
                    <span className = {'bold','price'}>{this.props.price/1000000} M $</span> 
                : <div></div>}
            </div>
        );
    }
}
export default Price; 