import React from 'react';

import {getApartmentsByStatus} from '../api/controllers/apartments';

import BuildCard from './build-card';


class RemovedApartments extends React.Component{

    constructor(){
        super();
        this.state = {
            removedApartments:null
        }
    }
    async componentDidMount() {
        const apartments = await getApartmentsByStatus('removed')
        await this.setState({
            removedApartments:apartments.data
        })
    }
    render(){
        let curRemovedApartments = this.state.removedApartments &&
            this.state.removedApartments.map((apartment,a)=>{
                return <BuildCard {...apartment} key={a}/>
            })
        return(
            <div>
                <h1 className='styledh1'>Removed Apartments</h1>
                <div className={'container'}>
                    <div className={'row'}>
                        {curRemovedApartments}
                    </div>
                </div>
            </div>
        )
    }
}
export default RemovedApartments;