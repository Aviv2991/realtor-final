import React from 'react';

import '../styling/saleStatus.css';

class SaleStatus extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sale_status:null
        }
    }
    componentDidMount =async()=>{
        const saleStatus = this.props.sale_status;
        const capitalizedSaleStatus = await saleStatus.charAt(0).toUpperCase() + saleStatus.slice(1);
        await this.setState({
            sale_status:capitalizedSaleStatus
        })
    }
    render(){
        return(
            <div className='sale-status'>
                <span className='bold'>For {this.state.sale_status && this.state.sale_status}</span>
            </div>
        )
    }
}
export default SaleStatus;