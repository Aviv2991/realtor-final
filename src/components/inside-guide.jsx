import React from 'react';
import {Link} from 'react-router-dom'

import '../styling/familyAgent.css';


class RentingInsidersGuide extends React.Component {
    render () {
        return(
            <div className="container-fluid text-center background-img-style">
                <div className="row">
                    <div className="col-md-6 my-3 m-none">
                        <Link to='/apartments' style={{textDecoration:'none'}}>
                            <div id="small-left-img" className="small-hero-img topmain change-img-size">
                                <h6>The Insider’s Guide to<br/>Renting in New York City</h6>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-6 my-3 m-none">
                        <Link style={{textDecoration:'none'}} to='/apartments'>
                            <div id="small-right-img" className="small-hero-img topmain change-img-size ">
                                <h6>The Insider’s Guide to<br/>Selling in New York City</h6>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }}
export default RentingInsidersGuide;