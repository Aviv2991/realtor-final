import React from 'react';
import {getApartmentsByStatus} from '../api/controllers/apartments';
import BuildCard from './build-card';



class ApprovedApartments extends React.Component{
    constructor(){
        super();
        this.state={
            approvedApartments:null
        }
    }
    async componentDidMount(){
        const apartments = await getApartmentsByStatus('approved');
        await this.setState({
            approvedApartments:apartments.data
        })
    }
    render(){
        let curApprovedApartments = this.state.approvedApartments &&
            this.state.approvedApartments.map((apartment,a)=>{
                return <BuildCard {...apartment} key={a}/> 
            })
        return(
            <div>
                <h1 style={{textAlign:'center'}}>Approved Apartments</h1>
                <div className={'container'}>
                    <div className={'row'}>
                        {curApprovedApartments}
                    </div>
                </div>
            </div>
        )
    }
}
export default ApprovedApartments;