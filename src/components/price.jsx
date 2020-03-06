import React from 'react';

class Price extends React.Component {
    constructor(props){
        super(props);
        this.state={
            priceWithCommas:null,
        }
    }
    numberWithCommas = (num) =>{
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    componentDidMount=async()=>{
        const numToCommas = await this.numberWithCommas(this.props.price);
        await this.setState({
            priceWithCommas:numToCommas
        })
    }
    render() {
        
        return(
            <div>
                {this.state.priceWithCommas ?
                    <p className = {'bold price text-dark mb-0'}>{this.state.priceWithCommas} $</p> 
                : <div></div>}
            </div>
        );
    }
}
export default Price; 