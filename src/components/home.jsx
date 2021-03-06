import React from 'react';

import BuildCard from './build-card';
import RentingInsidersGuide from './inside-guide.jsx';
import NumericStats from './numericStats';
import HomePageIcons from './homePageIcons';
import GoToGallery from './goToGallery';

import '../styling/familyAgent.css';



 
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fourApartmentsForHomePage : []
        }
    }

    async componentDidMount() {
        try {
            const apartments = await fetch(`http://localhost:3000/apartments/`);
            const apartmentsData = await apartments.json();
            await this.setState({
                fourApartmentsForHomePage : apartmentsData.apartments.slice(0, 4),
            });
        }catch(error) {
            throw new Error(`failed to load apartments with: ${error.message}`);
        }
    }
    render() {
        let curFourCards=this.state.fourApartmentsForHomePage.map((cur , c) => {
        return <BuildCard {...cur} key = {c} />})
        return(
            <div>
                <div style = {mainImgDivStyle} className = {'d-block'}>
                    <p style = {homeSearchParagraph}>The Home of Home Search℠</p>
                    <p style = {{fontSize:'20px',color:'white'}}>With the most complete source of homes for sale & real estate near you</p>
                    <ul style={{margin:'50px 0'}} id='mainimagelist' className={'d-flex justify-content-center'}>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>BUY</a></li>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>RENT</a></li>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>JUST SOLD</a></li>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>HOME VALUE</a></li>
                    </ul>
                    <GoToGallery/>
                </div>
                <h2 className = {'container mt-5'} style = {{fontSize:'1.75rem',textAlign:'left'}}>Most recent properties on Realtor</h2>
                <a className = {'container d-flex flex-start mt-3'} style = {{fontSize:'15px'}} href = "/apartments">View All Apartments</a>
                <div className = {'container d-flex mt-4'}>
                    {curFourCards}
                </div>
                <h2 className = {'container mb-3'} style = {recommendedHoodH2Style}>Recommended neighborhoods</h2>
                <h3 className = {'container'} style={h3Style}>Based on your previous search</h3>
                <NumericStats/>
                <RentingInsidersGuide/>
                <footer className = {'mb-0'}>
                    <div style = {{backgroundColor:'#333'}} className = {'d-flex justify-content-center sides-wrapper'}>
                        <HomePageIcons/>
                    </div>
                    <div className = {'container-fluid'} style = {{margin:'auto',backgroundColor:'#2c5454',padding:'10px 0'}}>
                        <p className={'text-left ml-4 text-white mb-0'}><small>© 1995-2019 </small>National Association of REALTORS® <small>and </small>Move, Inc.<small>All rights reserved.</small></p>
                    </div>
                </footer>
            </div>
        ); 
    }
}
export default Home;

//STYLING
const mainImgDivStyle = {backgroundImage:'url(https://static.rdc.moveaws.com/images/hero/veteran_united_prod/hp-takeover-desktop.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat',height:'570px'};
const homeSearchParagraph = {fontSize:'56px',color:'white',paddingTop:'100px'};
const h3Style = {color:'#757575',fontSize:'15px',textAlign:'left'};
const mainBackgroundLinksStyle = {textDecoration:'none',color:'white',fontSize:'14px'};
const recommendedHoodH2Style = {fontSize:'2.25em',marginTop:'50px',textAlign:'left'};   