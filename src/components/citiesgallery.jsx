import React from 'react';
import BuildCitiesCard from './buildcitycard.jsx';



class BuildCitiesGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities:[],
        }
    }
    componentDidMount() {
        fetch(`https://storage.googleapis.com/realtour/cities-rt.json`,{      
            method:'GET',}
            ).then(response=>response.json()
            ).then(success=>this.setState({cities:success})
            ).catch(error=>console.log(error));
    }
    render() {
        let citiesArry = this.state.cities.map((city,c)=>{return <BuildCitiesCard {...city} key={c}/>})
        return(
            <div className = {'row'}>
                {citiesArry}

            </div>
        );
    }

}
export default BuildCitiesGallery;