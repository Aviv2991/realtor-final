import React from 'react';

class RentingInsidersGuide extends React.Component {
    render () {
        return(
            <div className="container-fluid text-center background-img-style">
                <div className="row">
                    <div className="col-md-6 my-3 m-none">
                        <div id="small-left-img" className="small-hero-img topmain change-img-size">
                            <h6>The Insider’s Guide to<br/>Renting in New York City</h6>
                        </div>
                    </div>
                    <div className="col-md-6 my-3 m-none">
                        <div id="small-right-img" className="small-hero-img topmain change-img-size ">
                            <h6>The Insider’s Guide to<br/>Selling in New York City</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }}
export default RentingInsidersGuide;