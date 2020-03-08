import React from 'react';
import Cookies from 'js-cookie';

import {getApartmentsByUserId} from '../api/controllers/apartments';

import BuildCard from './build-card';
import GoToGallery from './goToGallery';


class UserApartments extends React.Component {
    
    constructor(){
        super();
        this.state = {
            curUserApartments:null,
        }
    }

    async componentDidMount(){
        const userId= JSON.parse(Cookies.get('login')).id;
        const apartments = await getApartmentsByUserId(userId);
        await this.setState({
            curUserApartments:apartments.data
        })
    }
    
    render () {
        let curUsersPendingRequestsArray = this.state.curUserApartments ?
            this.state.curUserApartments.filter(apartment=>apartment.status==='pending') : '';

        let curUsersPendingRequestsArrayToCards = curUsersPendingRequestsArray ?
            curUsersPendingRequestsArray.map((mapping,m)=>
            {return <BuildCard {...mapping} key={m}/>}) : '';

        let curUserApprovedApartmentsArray = this.state.curUserApartments ?
            this.state.curUserApartments.filter(apartment=>apartment.status==='approved') : '';

        let curUserApprovedApartmentsArrayToCards = curUserApprovedApartmentsArray ?
            curUserApprovedApartmentsArray.map((mapping,m)=>
            {return <BuildCard {...mapping} key={m}/>}) : '';

        // let curUserApprovedRequests = this.state.curUserApartments ?   
        //     this.state.curUserApartments.filter
        // let curApartments = this.state.curUserApartments ?
        //     this.state.curUserApartments.map((mapping,m) =>
        //                 {return <BuildCard {...mapping} key = {m}/>}) : ''
        return (
            <div>
                <p className='bold mt-2 text-left'>* Pending Requests will be approved by Admin shortly,however apartments removed or deleted by Admin will not remain accessible any longer!</p>
                <h1 className='styledh1'>My Properties</h1>
                <GoToGallery/>
                <h3 className='styledh3'>My Approved Proprties</h3>
                <div className={'container'}>
                    <div className={'row'}>
                        {curUserApprovedApartmentsArrayToCards}
                    </div>
                    <h3 className='styledh3'>My Pending Requests</h3>
                    <div className={'row'}>
                        {curUsersPendingRequestsArrayToCards}
                    </div>
                </div>
            </div>
        );
    }
};
export default UserApartments; 