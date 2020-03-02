import React from 'react';

import family_one from '../imgs/family_one.png';
import family_two from '../imgs/family_two.png';

class FamilyImagesAndForm extends React.Component {

    render () {
        return(
            <div style = {{marginTop:'50px'}}>
                <div className = "container-fluid">
                    <div className = "row position-relative">
                        <div className = "col-md-6 p-0 position-family">
                            <div id = "family">
                                <img src = {family_one} alt={""} />
                                <div className = "family-content">
                                    <h2>Need a home loan? Get pre-approved</h2>
                                    <p>Find a lender who can offer competitive mortgage rates and help you with pre-approval.</p>
                                    <button id = "family-button" className = "submit">Get per-approved now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "container-fluid">
                    <div className = "row position-relative flex-row-reverse" style={{borderBottom:'1px solid #ccc'}}>
                        <div className = "col-md-6 p-0 position-family">
                            <div id = "family">
                                <img src = {family_two} alt={'searchPageLoading'}/>
                                <div className = "family-content family-footer">
                                    <h2>Find Your Neighborhood</h2>
                                    <p>Do1ies it have pet-friendly rentals? What are the crime rates? How are the schools? Get important local information on the area you're most interested in.</p>
                                    <form>
                                        <div className = "btn-group form-section">
                                            <input readOnly  id="searchinput" type="search" className="form-control" placeholder="Address, City, Zip or Neighborhood" value="Manhattan, NY"/>
                                            <button className="" aria-label="Search">
                                                <span className="">Search</span>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }}
export default FamilyImagesAndForm;