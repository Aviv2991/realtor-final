import React from 'react';
import {getApartmentsByStatus} from '../api/controllers/apartments';
import BuildCard from './build-card';

class PendingApartments extends React.Component{
    constructor(){
        super();
        this.state={
            pendingApartments:null
        }
    }
    async componentDidMount(){
        const apartments = await getApartmentsByStatus('pending')
        await this.setState({
            pendingApartments:apartments.data
        })
    }
    render(){
        let curPendingApartments = this.state.pendingApartments && 
            this.state.pendingApartments.map((apartment,a)=>{
                return <BuildCard {...apartment} key={a}/>
            })
        return(
            <div>
                <h1 className='styledh1'>Pending Requests</h1>
                <div className={'container'}>
                    <div className={'row'}>
                        {curPendingApartments}
                    </div>
                </div>
            </div>
        );
    }
}
export default PendingApartments;