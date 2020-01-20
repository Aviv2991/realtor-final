import React from 'react';
import EmailAgent from './emailagent.jsx';

class BuildCitiesCard extends React.Component {
    render() {
        const{label,name,country,image} = this.props;
        return(
            <div className = {"card-wrapper col-lg-3 col-md-4 col-sm-6 py-3"}>
                <div className = {"image-wrapper"} style = {{height: "200px", backgroundImage:`url(../cities/${image})`,backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'relative'}}></div>
                <ul style = {{listStyle:'none'}} className = {"text-wrapper d-flex justify-content-between"}>
                    <li><span className = {'bold'}>{country}</span></li>
                    <li><span className = {'bold'}>{name}</span></li>
                    <li><span className = {'bold'}>{label}</span></li>
                </ul>
                <EmailAgent/>
            </div>
        );
    }
    

}
export default BuildCitiesCard;