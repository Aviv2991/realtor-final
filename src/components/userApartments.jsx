import React from 'react';
import Cookies from 'js-cookie';

import {getApartmentsByUserId} from '../api/controllers/apartments';

import BuildCard from '../components/build-card';


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
        let curApartments = this.state.curUserApartments ?
            this.state.curUserApartments.map((mapping,m) =>
                        {return <BuildCard {...mapping} key = {m}/>}) : ''
        return (
            <div>
                <h1 className='styledh1'>My Properties</h1>
                <div className={'container'}>
                    <div className={'row'}>
                        {curApartments}
                    </div>
                </div>
            </div>
        );
    }
};
export default UserApartments; 