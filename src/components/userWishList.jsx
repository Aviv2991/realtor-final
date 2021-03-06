import React from 'react';
import Cookies from 'js-cookie';

import BuildCard from './build-card';
import GoToGallery from './goToGallery';

import {getWishListApartments} from '../api/controllers/apartments';

class UserWishList extends React.Component {

    constructor(){
        super();
        this.state = {
            curUserWishListApartments:null,
        }
    }

    async componentDidMount(){
        if(Cookies.get('login')){
            const userId = JSON.parse(Cookies.get('login')).id;
            const apartments = await getWishListApartments(userId);
            await this.setState({
                curUserWishListApartments:apartments.data
            })
        }
    } 
    render() {
        let curApartments = this.state.curUserWishListApartments &&
            this.state.curUserWishListApartments.map((mapping,m) =>
                        {return <BuildCard {...mapping} key = {m}/>}) 
        return (
            <div>
                <h1 className='styledh1'>My Wish List</h1>
                <GoToGallery/>
                <div className='container'>
                    <div className={'row'}>
                        {curApartments}
                    </div>
                </div>
            </div>
        );
    }
}
export default UserWishList;