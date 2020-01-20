import React from 'react';
import greenv from '../imgs/v.png';
import BuildCard from './build-card';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import FamilyImagesAndForm from './family-agent.jsx';
import RentingInsidersGuide from './inside-guide.jsx';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fourApartmentsForHomePage : [],
            showmoremarkets : false,
            showmorecities : false,
            showmoreResources : false,
            showmoreoverview : false,
        }
    }
    handleFourAppsSucces = ({apartments}) => {
        console.log(apartments);
        let tempArr = [];
        for(var i = 0; i < 4; i++ ){
            let tempApartment = apartments[Math.floor(Math.random()*apartments.length)];
            if(!tempArr.includes(tempApartment)){
                tempArr.push(tempApartment);
            }
            else{
                i--
            }
        }
        this.setState({
            fourApartmentsForHomePage : tempArr,
        })
    }
    handlemarketsclick = () => {
        this.setState({showmoremarkets : !this.state.showmoremarkets});

    }
    handlecitiesclick = () => {
        this.setState({showmorecities : !this.state.showmorecities})
    }
    handleresourcesclick = () => {
        this.setState({showmoreResources : !this.state.showmoreResources})
    }
    handleoverviewclick = () => {
        this.setState({showmoreoverview : !this.state.showmoreoverview})
    }
    async componentDidMount() {
        try {
            const apartments = await fetch(`http://localhost:3000/apartments/`);
            const apartmentsData = await apartments.json();
            await console.log(apartmentsData)
            this.handleFourAppsSucces(apartmentsData);
        }catch(error) {
            throw new Error(`failed to load apartments with: ${error.message}`);
        }
    }
    render() {
        let curFourCards=this.state.fourApartmentsForHomePage.map((cur , c) => {
        return <BuildCard {...cur} key = {c} />})
        return(
            <div>
                <ul className = {'d-flex justify-content-center'}>
                    <img style = {reltrorLogoStyle} src = {greenv} alt = ""/>
                    <span className = {'mx-3'} style = {beReadyToBuySpan}>Be Ready to Buy... How Much Can You Borrow?</span>
                    <Button variant="outline-danger">Get Pre-Approved</Button>
                </ul>
                <div style = {mainImgDivStyle} className = {'d-block'}>
                    <p style = {homeSearchParagraph}>The Home of Home Search℠</p>
                    <p style = {{fontSize:'20px',color:'white'}}>With the most complete source of homes for sale & real estate near you</p>
                    <ul id='mainimagelist' className={'d-flex justify-content-center'}>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>BUY</a></li>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>RENT</a></li>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>JUST SOLD</a></li>
                        <li className = {'mx-2 bold'}><a style = {mainBackgroundLinksStyle} href='/apartments'>HOME VALUE</a></li>
                    </ul>
                    <form style = {{paddingBottom:'155px'}} action = "">
                        <Link to = '/apartments'>
                            <Button variant = "secondary" size = "lg">
                                Show Me All Properties!
                            </Button>
                        </Link>
                    </form>
                </div>
                <h2 className = {'container mt-5'} style = {{fontSize:'1.75rem',textAlign:'left'}}>New listings in New York, NY</h2>
                <a className = {'container d-flex flex-start mt-3'} style = {{fontSize:'15px'}} href = "/">View All 629 New Listings</a>
                <div className = {'container d-flex mt-4'}>
                    {curFourCards}
                </div>
                <h2 className = {'container mb-3'} style = {recommendedHoodH2Style}>Recommended neighborhoods</h2>
                <h3 className = {'container'} style={h3Style}>Based on your previous search</h3>
                <div className = {'container'}>
                    <header style = {headerStyle}>What's happening in New York, NY</header>
                    <ul id = "numeric-info" className={'d-flex justify-content-between row align-items-center'} style={{borderRadius:'4px',padding:'30px',textAlign:'center'}}>
                        <li className = {'col-6 col-md-auto'}>
                            <a className = {'text-decoration-none col-6 col-md-auto'} href = "/">
                                <p className = {'paintitblack'} style={{fontSize:'28px'}}>9864</p>
                                <p style = {{color:'#757575',fontSize:'16px'}}>Homes for sale</p>
                            </a>
                        </li>
                        <li className = {'col-6 col-md-auto'}>
                            <a className = {'text-decoration-none'} href = "/">
                                <p className = {'paintitblack'} style = {{fontSize:'28px'}}>883</p>
                                <p style = {{color:'#757575',fontSize:'16px'}}>Open houses</p>
                            </a>
                        </li>
                        <li className = {'col-6 col-md-auto'}>
                            <a className = {'text-decoration-none'} href="/">
                                <p className = {'paintitblack'} style={{fontSize:'28px'}}>6960</p>
                                <p style = {{color:'#757575',fontSize:'16px'}}>Recently sold</p>
                            </a>
                        </li>
                        <li className = {'col-6 col-md-auto'}>
                            <a className = {'text-decoration-none'} href="/">
                                <p className = {'paintitblack'} style={{fontSize:'28px'}}>18</p>
                                <p style = {{color:'#757575',fontSize:'16px'}}>Foreclosures</p>
                            </a>
                        </li>
                        <li className = {'col-12 col-md-auto'}>
                            <a className = {'text-decoration-none'} href="/">
                                <p className = {'paintitblack'} style={{fontSize:'28px'}}>947</p>
                                <p style = {{color:'#757575',fontSize:'16px'}}>Price reduced</p>
                            </a>
                        </li>

                    </ul>

                </div>
                <div className = {'d-block'} style = {secondBackgroundImgStyle}>
                    <p style = {trendsStyle}>Trends</p>
                    <h3 style = {secondBackgroundh3Style}>Beauty on a Budget! 10 Victorians Priced Under $150K</h3>
                <div style = {{paddingBottom:'180px'}}><button style={readMoreBtnStyle}><strong>Read More</strong></button></div>
                </div>
                <FamilyImagesAndForm/>
                <RentingInsidersGuide/>
                <div className = {'row'} style = {{borderBottom:'1px solid grey',margin:'60px 0'}}>
                    <div className = {'container row col-md-6 '}>
                        <div className = {'col-sm-6'}>
                            <img style = {{width:'230px',height:'90px'}} src="https://static.rdc.moveaws.com/images/home/nar-logo.png" alt=""/>
                            <p style = {{marginLeft:'50px',fontSize:'14px',textAlign:'left'}}>Find out how the NAR works for consumers and REALTORS®</p>
                        </div>
                        <div className = {'col-sm-6'}>
                            <p style = {{fontSize:'14px',marginBottom:'15px',textAlign:'left'}}><strong>Learn About N.A.R</strong></p>
                            <ul style = {{listStyle:'circle',textAlign:'left'}}>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>About NAR</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Agent vs. REALTOR®</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Find an Appraiser</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Commercial Services</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>NAR Global Alliances</a></li>
                            </ul>

                        </div>

                    </div>
                    <div className = {'container row col-md-6'}>
                        <div className = {'col-sm-6'}>
                            <p style = {{fontSize:'14px',marginBottom:'15px',textAlign:'left'}}><strong>For Homeowners</strong></p>
                            <ul style = {{listStyle:'circle',textAlign:'left'}}>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Why Use a REALTOR® with the SRES?</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Sell a Home: Step-by-Step</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Real Estate Today Radio</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>REALTORS® Relief Foundation</a></li>
                            </ul>

                        </div>
                        <div className = {'container row col-sm-6'}>
                            <p style = {{fontSize:'14px',marginBottom:'15px',textAlign:'left'}}><strong>For REALTORS®</strong></p>
                            <ul style = {{listStyle:'circle',textAlign:'left'}}>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Own your brand online with .realtor & .realestate domains</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Attend the REALTORS® Annual Conference & Expo in San Francisco</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>REALTOR Benefits® Program</a></li>
                                <li><a style = {{color:'#555',fontSize:'14px'}} href = '/'>Center for REALTOR® Development</a></li>
                            </ul>

                        </div>


                    </div>
                </div>
                <div className = {'container'} style = {{padding:'10px 0',fontSize:'12px'}}>
                    <div className = {'container row'}>
                        <div className = {'col-6 col-md-3'}>
                            <h4 style = {{fontSize:'12px',textAlign:'left'}}>Popular Real Estate Markets</h4>
                            <ul style = {{listStyle:'none',textAlign:'left'}}>
                                <li><a style = {{color:'#555'}} href = '/'>Washington Real Estate</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Chicago Real Estate</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Dallas Real Estate</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Fort Worth Real Estate</a></li>
                                {this.state.showmoremarkets && 
                                <div>
                                    <li><a style = {{color:'#555'}} href = '/'>Houston Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Philadelphia Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Los Angeles Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Atlanta Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Phoenix Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Boston Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Miami Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Orlando FL Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>San Diego Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Tampa Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Las Vegas Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>West Palm Beach Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Raleigh Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>New Haven Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Durham Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Chapel Hill Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Saint Petersburg FL Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Charlotte Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Denver Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>New York City Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Staten Island NY Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Brooklyn NY Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Queens NY Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Bronx NY Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Manhattan NY Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>New York State Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Philadelphia PA Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Sacramento Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Saint Louis Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Seattle Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>San Francisco Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Austin TX Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Jacksonville FL Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Plano Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>San Jose CA Real Estate</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Seattle WA Real Estate</a></li>
                                </div>
                                }
                            </ul>
                            {!this.state.showmoremarkets ? <button onClick = {this.handlemarketsclick} className = {'text-primary rounded'}>SHOW MORE</button>
                             : <button onClick = {this.handlemarketsclick} className = {'text-primary rounded'}>SHOW LESS</button>
                            }
                        </div>
                        <div className = {'col-6 col-md-3'}>
                            <h4 style = {{fontSize:'12px',textAlign:'left'}}>Popular Apartment Cities</h4>
                            <ul style = {{listStyle:'none',textAlign:'left'}}>
                                <li><a style = {{color:'#555'}} href = '/'>Denver Apartments</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Miami Apartments</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Miami Beach Apartments</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Portland OR Apartments</a></li>
                                {this.state.showmorecities &&
                                <div>
                                    <li><a style = {{color:'#555'}} href = '/'>Denver Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Miami Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Miami Beach Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Portland OR Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>New York City Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Bronx NY Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Brooklyn NY Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Manhattan NY Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Queens NY Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Staten Island NY Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Tampa Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>San Diego Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Austin Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Jacksonville FL Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Seattle Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Washington DC Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>San Francisco Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Chicago Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Phoenix Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Detroit Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>West Palm Beach Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>San Antonio Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Stamford Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Boca Raton Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Santa Barbara Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Irving Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>North Hollywood Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Fort Worth Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Fort Collins Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Atlanta Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Las Vegas Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Sherman Oaks Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Orlando Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Boston Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Santa Monica Apartments</a></li>
                                    <li><a style = {{color:'#555'}} href = '/'>Dallas Apartments</a></li>
                                </div> 
                                }
                            </ul>
                            {!this.state.showmorecities ? <button onClick = {this.handlecitiesclick} className = {'text-primary rounded'}>SHOW MORE</button>
                             : <button onClick = {this.handlecitiesclick} className = {'text-primary rounded'}>SHOW LESS</button>
                            }

                        </div>
                        <div className = {'col-6 col-md-3'}>
                            <h4 style = {{fontSize:'12px',textAlign:'left'}}>Popular Resources</h4>
                            <ul style = {{listStyle:'none',textAlign:'left'}}>
                                <li><a style = {{color:'#555'}} href = '/'>Homes For Sale Near Universities</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Local Real Estate Market</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Real Estate Mobile Apps</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Android Rentals App</a></li>
                                {this.state.showmoreResources&&
                                    <div>
                                        <li><a style = {{color:'#555'}} href = '/'>iPhone Rentals App</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Full-Service Movers</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Moving Company Search on Moving.com</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Truck Rental</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Assisted Living on SeniorHousingNet.com</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Real Estate Search</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>New Home Construction Search</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Foreclosure Search</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Recently Sold Homes Search</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Property Record Search</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Apartment Rental Search</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>iPhone Real Estate App</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Android Real Estate App</a></li>
                                    </div>
                                }
                            </ul>
                            {!this.state.showmoreResources ? <button onClick = {this.handleresourcesclick} className = {'text-primary rounded'}>SHOW MORE</button> : <button onClick={this.handleresourcesclick} className={'text-primary rounded'}>SHOW LESS</button>}
                        </div>
                        <div className = {'col-6 col-md-3'}>
                            <h4 style = {{fontSize:'12px',textAlign:'left'}}>US Real Estate Overview & Homes for Sale</h4>
                            <ul style = {{listStyle:'none',textAlign:'left'}}>
                                <li><a style = {{color:'#555'}} href = '/'>Alabama Real Estate Overview(320 new listings)</a></li>
                                <li><a style = {{color:'#555'}} href = '/'>Alaska Real Estate Overview(61 new listings)</a></li>
                                {this.state.showmoreoverview && 
                                    <div>
                                        <li><a style = {{color:'#555'}} href = '/'>Arizona Real Estate Overview(762 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Arkansas Real Estate Overview(320 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>California Real Estate Overview(1806 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Colorado Real Estate Overview(341 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Connecticut Real Estate Overview(190 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Delaware Real Estate Overview(112 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>District of Columbia Real Estate Overview(23 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Florida Real Estate Overview(3022 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Georgia Real Estate Overview(1080 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Hawaii Real Estate Overview(89 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Idaho Real Estate Overview(189 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Illinois Real Estate Overview(722 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Indiana Real Estate Overview(284 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Iowa Real Estate Overview(139 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Kansas Real Estate Overview(177 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Kentucky Real Estate Overview(256 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Louisiana Real Estate Overview(385 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Maine Real Estate Overview(83 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Maryland Real Estate Overview(332 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Massachusetts Real Estate Overview(255 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Michigan Real Estate Overview(517 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Minnesota Real Estate Overview(245 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Mississippi Real Estate Overview(199 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Missouri Real Estate Overview(297 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Montana Real Estate Overview(109 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Nebraska Real Estate Overview(96 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Nevada Real Estate Overview(271 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>New Hampshire Real Estate Overview(76 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>New Jersey Real Estate Overview(789 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>New Mexico Real Estate Overview(150 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>New York Real Estate Overview(869 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>North Carolina Real Estate Overview(933 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>North Dakota Real Estate Overview(67 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Ohio Real Estate Overview(611 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Oklahoma Real Estate Overview(215 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Oregon Real Estate Overview(298 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Pennsylvania Real Estate Overview(750 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Rhode Island Real Estate Overview(82 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>South Carolina Real Estate Overview(654 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>South Dakota Real Estate Overview(40 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Tennessee Real Estate Overview(563 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Texas Real Estate Overview(2049 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Utah Real Estate Overview(258 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Vermont Real Estate Overview(46 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Virginia Real Estate Overview(418 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Washington Real Estate Overview(394 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>West Virginia Real Estate Overview(105 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Wisconsin Real Estate Overview(186 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Wyoming Real Estate Overview(62 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Virgin Islands of the United States Real Estate Overview(10 new listings)
                                            Guam Real  Estate Overview(14 new listings)</a></li>
                                        <li><a style = {{color:'#555'}} href = '/'>Puerto Rico Real Estate Overview(20 new listings)</a></li>
                                    </div>
                                }
                            </ul>
                            {!this.state.showmoreoverview ? <button onClick = {this.handleoverviewclick} className={'text-primary rounded mb-0'}>SHOW MORE</button> :<button onClick={this.handleoverviewclick} className={'text-primary rounded mb-0'}>SHOW LESS</button>  }
                        </div>
                    </div>
                </div>
                <footer className = {'mb-0'}>
                    <div style = {{backgroundColor:'#333'}} className = {'d-flex justify-content-around sides-wrapper'}>
                    <div className = {'pt-5 pb-5'}>
                        <ul id = 'iconlist' className = {'d-flex m-0'}>
                            <li className = {'iconslist'}>
                                <a className = {'mx-2'} style = {{backgroundColor:'white',padding:'10px 15px',borderRadius:'5px'}} href='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="24"><path fill="#000" d="M3.7 23.5H8V13.1h3.7l.5-4.5H8.1v-3c0-1 .7-1.6 1.6-1.6h2.7V0H8.6a5 5 0 0 0-5 5v3.6H0v4.5h3.7v10.4z"></path>
                                        <path fill="#000" d="M3.7 23.5H8V13.1h3.7l.5-4.5H8.1v-3c0-1 .7-1.6 1.6-1.6h2.7V0H8.6a5 5 0 0 0-5 5v3.6H0v4.5h3.7v10.4z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className = {'iconslist'}>
                                <a className = {'mx-2'}  style = {{backgroundColor:'white',padding:'10px 15px',borderRadius:'5px'}} href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="25"><path fill="#000" d="M27.1 6.3A17.6 17.6 0 0 1 9.7 24.6c-3.5 0-6.8-1-9.5-2.8l1.5.1c2.9 0 5.5-1 7.6-2.6-2.7 0-5-1.9-5.7-4.3a6 6 0 0 0 2.8-.1c-2.8-.6-5-3-5-6v-.1c.9.4 1.8.7 2.8.8a6.1 6.1 0 0 1-1.9-8.3C5.3 5.1 10 7.5 15 7.8a6.2 6.2 0 0 1 6-7.6c1.8 0 3.4.8 4.5 2 1.4-.3 2.7-.8 3.9-1.5A6.2 6.2 0 0 1 26.7 4a12 12 0 0 0 3.5-1c-.8 1.2-1.9 2.3-3 3.2"></path>
                                        <path fill="#000" d="M27.1 6.3A17.6 17.6 0 0 1 9.7 24.6c-3.5 0-6.8-1-9.5-2.8l1.5.1c2.9 0 5.5-1 7.6-2.6-2.7 0-5-1.9-5.7-4.3a6 6 0 0 0 2.8-.1c-2.8-.6-5-3-5-6v-.1c.9.4 1.8.7 2.8.8a6.1 6.1 0 0 1-1.9-8.3C5.3 5.1 10 7.5 15 7.8a6.2 6.2 0 0 1 6-7.6c1.8 0 3.4.8 4.5 2 1.4-.3 2.7-.8 3.9-1.5A6.2 6.2 0 0 1 26.7 4a12 12 0 0 0 3.5-1c-.8 1.2-1.9 2.3-3 3.2"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className = {'iconslist'}>
                                <a className = {'mx-2'}  style = {{backgroundColor:'white',padding:'10px 15px',borderRadius:'5px'}} href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25"><path fill="#000" d="M1 8.3h5.5v16.3H1V8.3zM3.8 6C1.8 6 .6 4.8.6 3.2.7 1.6 1.9.4 3.8.4c1.9 0 3 1.2 3 2.8 0 1.6-1.1 2.9-3 2.9zm22.6 18.5h-5.5v-8.7c0-2.2-.8-3.7-2.8-3.7a3 3 0 0 0-2.8 2c-.2.3-.2.8-.2 1.3v9H9.6V8.4H15v2.3c.7-1.1 2-2.7 5-2.7 3.6 0 6.3 2.3 6.3 7.3v9.4z"></path>
                                        <path fill="#000" d="M1 8.3h5.5v16.3H1V8.3zM3.8 6C1.8 6 .6 4.8.6 3.2.7 1.6 1.9.4 3.8.4c1.9 0 3 1.2 3 2.8 0 1.6-1.1 2.9-3 2.9zm22.6 18.5h-5.5v-8.7c0-2.2-.8-3.7-2.8-3.7a3 3 0 0 0-2.8 2c-.2.3-.2.8-.2 1.3v9H9.6V8.4H15v2.3c.7-1.1 2-2.7 5-2.7 3.6 0 6.3 2.3 6.3 7.3v9.4z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className = {'iconslist'}>
                                <a className = {'mx-2'}  style = {{backgroundColor:'white',padding:'10px 15px',borderRadius:'5px'}} href="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50" width="30px" height="30px">    <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
                                    <path xmlns="http://www.w3.org/2000/svg" d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"/>
                                </svg>
                                </a>
                            </li>
                            <li className = {'iconslist'}>
                                <a className = {'mx-2'}  style = {{backgroundColor:'white',padding:'10px 15px',borderRadius:'5px'}} href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#000" d="M12 0a12 12 0 0 0-4.8 23c0-.8 0-1.9.2-2.8l1.5-6.5s-.3-.8-.3-1.9c0-1.8 1-3.1 2.3-3.1 1 0 1.6.8 1.6 1.8s-.7 2.7-1 4.3C11 16 12 17 13.2 17c2.3 0 3.8-3 3.8-6.4 0-2.6-1.7-4.6-5-4.6-3.6 0-5.9 2.7-5.9 5.7 0 1 .3 1.8.8 2.4.2.2.3.4.2.7l-.3 1c0 .2-.3.3-.6.2-1.6-.7-2.4-2.5-2.4-4.6C3.9 8.1 6.8 4 12.5 4 17 4 20 7.4 20 11c0 4.6-2.7 8.1-6.5 8.1-1.3 0-2.5-.7-3-1.5L9.9 21a10 10 0 0 1-1.2 2.6A12 12 0 1 0 12 0"></path>
                                        <path fill="#000" d="M12 0a12 12 0 0 0-4.8 23c0-.8 0-1.9.2-2.8l1.5-6.5s-.3-.8-.3-1.9c0-1.8 1-3.1 2.3-3.1 1 0 1.6.8 1.6 1.8s-.7 2.7-1 4.3C11 16 12 17 13.2 17c2.3 0 3.8-3 3.8-6.4 0-2.6-1.7-4.6-5-4.6-3.6 0-5.9 2.7-5.9 5.7 0 1 .3 1.8.8 2.4.2.2.3.4.2.7l-.3 1c0 .2-.3.3-.6.2-1.6-.7-2.4-2.5-2.4-4.6C3.9 8.1 6.8 4 12.5 4 17 4 20 7.4 20 11c0 4.6-2.7 8.1-6.5 8.1-1.3 0-2.5-.7-3-1.5L9.9 21a10 10 0 0 1-1.2 2.6A12 12 0 1 0 12 0"></path>
                                    </svg>
                                </a>
                            </li>
                            <li className = {'iconslist'}>
                                <a className = {'mx-2'}  style = {{backgroundColor:'white',padding:'10px 15px',borderRadius:'5px'}} href="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#000" d="M0 2C0 .9.9 0 2 0h20a2 2 0 0 1 2 2v15.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.6 3.2V14.5l.5-.3 7.2-3.8 1-.5.6-.3-.5-.3-7.8-4-.5-.3-.5-.3v.5z"></path>
                                        <path fill="#000" d="M0 2C0 .9.9 0 2 0h20a2 2 0 0 1 2 2v15.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.6 3.2V14.5l.5-.3 7.2-3.8 1-.5.6-.3-.5-.3-7.8-4-.5-.3-.5-.3v.5z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        </div>
                        <div  className = "d-flex justify-content-center align-items-center">
                        <ul className = {'d-flex'}>
                            <li>
                                <a className = {'mx-2'} style = {{backgroundColor:'white',padding:'10px',borderRadius:'5px'}} href='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" y="96"><path fill="#6A7272" d="M34.7 8.5c0-.3.1-.3.6-.3v5.1c.8-.6 1.8-.9 2.6-.9 1.9 0 2.4.6 2.4 4.1v5.6c0 .2 0 .2-.6.2v-5.9c0-3-.3-3.4-1.9-3.4-.8 0-1.8.3-2.5 1v8.1c0 .2 0 .2-.6.2V8.5zM45 12.4c1.9 0 3 1.2 3 5.1 0 3.4-1.2 5.1-3.1 5.1-1.9 0-3.1-.7-3.1-5.1 0-3.6 1.2-5.1 3.2-5.1zm-.1 9.6c1.5 0 2.5-1.5 2.5-4.6 0-3.5-.9-4.5-2.4-4.5s-2.5 1.2-2.5 4.7.8 4.4 2.4 4.4zm10.5-.1c-.9.5-2.1.6-3 .6-2.4 0-2.8-1-2.8-3.7v-6c0-.2 0-.2.6-.2V19c0 2.3.3 3 2.1 3 .7 0 1.7-.1 2.4-.5v-8.6c0-.2 0-.2.6-.2v9.2zm7.2-8.7l-.2.5c-.7-.5-1.4-.7-2.3-.7-1.4 0-2.5.5-2.5 1.4 0 .5.3.9.8 1.4l2.7 1.9c.9.7 1.4 1.4 1.4 2.3 0 1.8-1.1 2.7-3.1 2.7-1.6 0-2.5-.4-2.5-.7l.2-.5c.6.4 1.2.5 2.2.5 1.5 0 2.5-.5 2.5-2 0-.7-.4-1.3-1.3-1.9l-2.4-1.7c-.9-.7-1.3-1.2-1.3-1.9 0-1.4 1.4-2 3.1-2 1.7-.1 2.7.5 2.7.7zm7.1 2.2l-.1 2.2c-2 .4-4.6.4-5.1.4v.1c0 3.5 1.1 3.9 2.6 3.9.9 0 1.9-.2 2.4-.7l.1.6c0 .2-1.2.7-2.6.7-1.9 0-3.2-.6-3.2-4.6 0-5.3 1.9-5.7 3.5-5.7 1.7.1 2.4 1.3 2.4 3.1zm-5.2 2c.7 0 3 0 4.5-.3l.1-1.5c0-1.7-.4-2.7-1.8-2.7-1.1.1-2.7.3-2.8 4.5zm13.3-5.1c1.9 0 3 1.2 3 5.1 0 3.3-1.1 5-3 5s-3.1-.7-3.1-5c-.1-3.6 1.1-5.1 3.1-5.1zm-.2 9.5c1.5 0 2.5-1.5 2.5-4.5 0-3.5-.9-4.4-2.3-4.4-1.5 0-2.5 1.2-2.5 4.6-.1 3.4.8 4.3 2.3 4.3zm10.9-9.4l.1.3c0 .2-.1.3-.3.3l-1.3-.1c.8.4 1.4 1.3 1.4 2.6 0 1.9-.9 3.7-3.1 3.7L84 19c-.5.4-1.1 1-1.1 1.4 0 .3 1.4.6 3.2.8 1.3.2 2.5.5 2.5 2 0 1.3-1.2 2.6-3.7 2.6s-3-1.1-3-2.2c0-.9.8-1.8 1.6-2.3-.8-.2-1.3-.5-1.3-.8 0-.6.7-1.3 1.2-1.8-1-.6-1.2-1.7-1.2-3 0-2.3 1.4-3.5 3.1-3.5l.8.1h2.4zm-6 11.2c0 .8.4 1.6 2.4 1.6s3.1-1 3.1-2c0-1.2-1-1.4-2.1-1.5l-1.7-.2c-.8.5-1.7 1.3-1.7 2.1zm2.8-10.7c-1.3 0-2.4 1-2.4 3 0 1.4.3 2.8 2.4 2.8 1.7 0 2.4-1.6 2.4-3.2-.1-1.7-1-2.6-2.4-2.6zm5.3-4.3c.3 0 .4.2.4.6 0 .4-.1.6-.5.6-.3 0-.4-.2-.4-.6 0-.4.2-.6.5-.6zm.2 13.3c0 .2 0 .2-.7.2v-9.2c0-.3.2-.3.7-.3v9.3zm6.8-8.5a2 2 0 0 0-1.4-.5c-1.3 0-2.9.6-2.9 4.7 0 3.8 1 4.2 2.5 4.2.7 0 1.3-.3 1.8-.7l.1.4c0 .2-.9.9-2 .9-1.8 0-3.1-.4-3.1-4.9 0-4.7 1.9-5.2 3.5-5.2.8 0 1.6.4 1.6.6l-.1.5zm-25 6.3c0 .8.1 1.3.3 1.6.2.3.3.3.6.4.3 0 .3 0 .3.3 0 .2-.1.3-.3.3-.4 0-.8-.2-1.1-.6-.3-.4-.4-1-.4-1.9V8.5c0-.3.2-.3.6-.3v11.5zM34.7 8.5c0-.3.1-.3.6-.3v5.1c.8-.6 1.8-.9 2.6-.9 1.9 0 2.4.6 2.4 4.1v5.6c0 .2 0 .2-.6.2v-5.9c0-3-.3-3.4-1.9-3.4-.8 0-1.8.3-2.5 1v8.1c0 .2 0 .2-.6.2V8.5zM45 12.4c1.9 0 3 1.2 3 5.1 0 3.4-1.2 5.1-3.1 5.1-1.9 0-3.1-.7-3.1-5.1 0-3.6 1.2-5.1 3.2-5.1zm-.1 9.6c1.5 0 2.5-1.5 2.5-4.6 0-3.5-.9-4.5-2.4-4.5s-2.5 1.2-2.5 4.7.8 4.4 2.4 4.4zm10.5-.1c-.9.5-2.1.6-3 .6-2.4 0-2.8-1-2.8-3.7v-6c0-.2 0-.2.6-.2V19c0 2.3.3 3 2.1 3 .7 0 1.7-.1 2.4-.5v-8.6c0-.2 0-.2.6-.2v9.2zm7.2-8.7l-.2.5c-.7-.5-1.4-.7-2.3-.7-1.4 0-2.5.5-2.5 1.4 0 .5.3.9.8 1.4l2.7 1.9c.9.7 1.4 1.4 1.4 2.3 0 1.8-1.1 2.7-3.1 2.7-1.6 0-2.5-.4-2.5-.7l.2-.5c.6.4 1.2.5 2.2.5 1.5 0 2.5-.5 2.5-2 0-.7-.4-1.3-1.3-1.9l-2.4-1.7c-.9-.7-1.3-1.2-1.3-1.9 0-1.4 1.4-2 3.1-2 1.7-.1 2.7.5 2.7.7zm7.1 2.2l-.1 2.2c-2 .4-4.6.4-5.1.4v.1c0 3.5 1.1 3.9 2.6 3.9.9 0 1.9-.2 2.4-.7l.1.6c0 .2-1.2.7-2.6.7-1.9 0-3.2-.6-3.2-4.6 0-5.3 1.9-5.7 3.5-5.7 1.7.1 2.4 1.3 2.4 3.1zm-5.2 2c.7 0 3 0 4.5-.3l.1-1.5c0-1.7-.4-2.7-1.8-2.7-1.1.1-2.7.3-2.8 4.5zm13.3-5.1c1.9 0 3 1.2 3 5.1 0 3.3-1.1 5-3 5s-3.1-.7-3.1-5c-.1-3.6 1.1-5.1 3.1-5.1zm-.2 9.5c1.5 0 2.5-1.5 2.5-4.5 0-3.5-.9-4.4-2.3-4.4-1.5 0-2.5 1.2-2.5 4.6-.1 3.4.8 4.3 2.3 4.3zm10.9-9.4l.1.3c0 .2-.1.3-.3.3l-1.3-.1c.8.4 1.4 1.3 1.4 2.6 0 1.9-.9 3.7-3.1 3.7L84 19c-.5.4-1.1 1-1.1 1.4 0 .3 1.4.6 3.2.8 1.3.2 2.5.5 2.5 2 0 1.3-1.2 2.6-3.7 2.6s-3-1.1-3-2.2c0-.9.8-1.8 1.6-2.3-.8-.2-1.3-.5-1.3-.8 0-.6.7-1.3 1.2-1.8-1-.6-1.2-1.7-1.2-3 0-2.3 1.4-3.5 3.1-3.5l.8.1h2.4zm-6 11.2c0 .8.4 1.6 2.4 1.6s3.1-1 3.1-2c0-1.2-1-1.4-2.1-1.5l-1.7-.2c-.8.5-1.7 1.3-1.7 2.1zm2.8-10.7c-1.3 0-2.4 1-2.4 3 0 1.4.3 2.8 2.4 2.8 1.7 0 2.4-1.6 2.4-3.2-.1-1.7-1-2.6-2.4-2.6zm5.3-4.3c.3 0 .4.2.4.6 0 .4-.1.6-.5.6-.3 0-.4-.2-.4-.6 0-.4.2-.6.5-.6zm.2 13.3c0 .2 0 .2-.7.2v-9.2c0-.3.2-.3.7-.3v9.3zm6.8-8.5a2 2 0 0 0-1.4-.5c-1.3 0-2.9.6-2.9 4.7 0 3.8 1 4.2 2.5 4.2.7 0 1.3-.3 1.8-.7l.1.4c0 .2-.9.9-2 .9-1.8 0-3.1-.4-3.1-4.9 0-4.7 1.9-5.2 3.5-5.2.8 0 1.6.4 1.6.6l-.1.5zm-25 6.3c0 .8.1 1.3.3 1.6.2.3.3.3.6.4.3 0 .3 0 .3.3 0 .2-.1.3-.3.3-.4 0-.8-.2-1.1-.6-.3-.4-.4-1-.4-1.9V8.5c0-.3.2-.3.6-.3v11.5z"></path><path fill="#80D0E1" d="M4.6 11.8l-2.9 2.5 2.9 1.9zM15.8 17l1.5.9 9.2-8.3-10.7-7.4-11.2 9.6 9.2 5.9z"></path><path fill="#F69220" d="M4.6 16.2v5.1l4.9-1.9z"></path><path fill="#7C781C" d="M4.6 11.8v4.4l4.9 3.2 4.3-1.7z"></path><path fill="#64680F" d="M13.8 17.7l-4.3 1.7 3.5 2.3 2.8-2.5V19z"></path><path fill="#C57F11" d="M13 21.7l-3.5-2.3-4.9 1.9L15.8 28v-8.8z"></path><path fill="#67B575" d="M15.8 19v.2l1.5-1.3-1.5-.9-2 .7z"></path><path fill="#CBDC83" d="M17.3 17.9l-1.5 1.3V28l10.7-4.7z"></path></svg>
                                </a>
                            </li>
                            <li>
                                <a className ={ 'mx-2'} style = {{backgroundColor:'white',padding:'10px',borderRadius:'5px'}} href='/'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="30" y="126"><path fill="#282526" d="M14.9 1.1h11.9l.4.3c0 5 .2 9.9 0 14.9-.2 4.1-1.9 7.5-5.7 9.6-1.9 1-4 1.9-6 2.8-.3.1-.6.2-.9.1-2.9-.9-5.7-2.2-8.1-4.1a10.7 10.7 0 0 1-3.8-7.3c-.2-1.1-.2-2.3-.2-3.4V1.7c0-.4.1-.5.5-.5l11.9-.1z"></path><path fill="#076FB8" d="M90.8 1.3l2.5.2c1.2.2 1.8.9 1.9 1.9.1.9-.4 1.9-1.3 2.4-.4.2-.4.3-.2.7L96 9.6c.2.3.7.4 1 .6l.2.1-.3.2c-1 .1-1.9-.1-2.6-1l-1.8-2.6c-.2-.2-.4-.5-.7-.5-.8-.2-1-.1-1 .7V9c0 .6.2.9.8.9l.3.2-.3.1h-2.8l-.3-.2.3-.2c.7 0 .9-.4.9-1.1v-6c0-.5-.1-.9-.8-.9l-.3-.2.3-.2h1.7l.2-.1zm-58.7 9h-1.4l-.3-.2.2-.2c.8 0 .9-.5.9-1.1v-6c0-.6-.1-1-.8-1l-.3-.2.3-.2h4.2c1.2.1 1.8.8 2 1.8.2 1-.3 1.9-1.3 2.4-.4.2-.4.4-.2.7l2.2 3 1.1.7.2.1-.2.1c-.9.1-1.8 0-2.4-.7l-2-2.8c-.2-.2-.4-.5-.7-.5-.8-.2-1-.1-1 .8v1.8c0 .6.2 1 .8 1l.3.2-.3.2-1.3.1zm50.3-9.1c2.9.1 4.7 2 4.6 4.9a4.6 4.6 0 0 1-4.9 4.4 4.5 4.5 0 0 1-4.5-4.7c0-2.6 2.1-4.7 4.8-4.6z"></path><path fill="#0E73BA" d="M43.9 10.3h-3l-.3-.1.3-.2c.7 0 1-.4 1-1.1v-6c0-.6-.1-1-.8-1.1a.2.2 0 0 1-.2-.2l.3-.2h5.7l.1 1.8h-.4c-.3-1.3-1.3-1.3-2.3-1.3-1.3 0-1.3 0-1.3 1.3V5c0 .2.3.4.4.4h1.1c.6 0 1.1-.1 1.1-.9l.3-.2.1.3v2.5l-.2-.2c-.1-1-.7-.9-1.4-.9C43 6 43 5.9 43 7.2v1.7c0 .5.3.8.8.9h1.9c.9 0 1.2-.6 1.6-1.2l.4-.3c0 .1.1.3 0 .4-.4 1.5-.4 1.5-2 1.5l-1.8.1z"></path><path fill="#0970B9" d="M56.5 10.3h-1.4l-.3-.2.3-.2c.7 0 .7-.3.5-.8L55 7.2c-.1-.2-.3-.4-.5-.4h-2.1c-.2 0-.4.2-.5.3l-.7 2.1c-.1.4 0 .6.4.6l.4.2-.4.2h-2.1l-.3-.2.3-.2c.5 0 .8-.2 1-.7l2.8-7.3c.1-.3.5-.4.7-.6l.3.6 2.4 7.1c.2.6.5 1 1.2 1l.2.2-.3.1-1.3.1zm16.2-4.6V9c0 .6.2 1 .9 1l.4.2-.4.2h-3l-.4-.2.4-.2c.8 0 1-.4 1-1.1V2.3l-.4-.4h-1.3c-.7 0-1.2.3-1.5 1l-.4.2c0-.1-.1-.3 0-.4l.4-1.5.2-.3.2.1.7.3h6.1l.5-.1.4-.3v.6l-.1 1.3-.2.3-.3-.1c-.1-.8-.6-1-1.2-1-1.9-.2-1.9-.2-1.9 1.7l-.1 2z"></path><path fill="#0E73BA" d="M63.5 10.3h-2.8l-.4-.1.3-.2c.6 0 .9-.3.9-1V2.7c0-.6-.2-.9-.8-.9a.8.8 0 0 1-.4-.2l.4-.2h2.8l.4.2-.3.2c-.6 0-.9.3-.9.9v6.1c0 .6.3 1 .9 1h1.7c.8 0 1.1-.6 1.4-1.2l.3-.3c0 .1.1.3 0 .4-.4 1.6-.4 1.6-2 1.5l-1.5.1z"></path><path fill="#282526" d="M68.6 13.2l1.4.1c.7.1 1.3.5 1.4 1.3.1.7-.2 1.4-.9 1.7-.4.2-.3.4-.1.6L72 19l.4.4.5.2c-.2 0-.5.2-.6.1-.5-.2-1.1-.4-1.5-.8-.5-.5-.8-1.2-1.2-1.7l-.7-.4c-.4-.1-.6.1-.5.5v1.4c0 .4.1.8.6.8l.2.2-.2.1h-2l-.3-.1.2-.2c.5 0 .6-.3.6-.7v-4.6c0-.2-.3-.4-.5-.5l-.3-.2.3-.2 1.6-.1z"></path><path fill="#2E2A2B" d="M40.3 16.7l.1 2.1c0 .2.4.4.6.6l.3.2-.3.1h-1.7l-.2-.1.2-.1c.5 0 .6-.4.6-.8v-4.3c0-.5-.3-.7-.7-.8l-.3-.2.3-.1h1l.4.2 3.9 4.5.2.1.1-.2-.1-3.6c0-.4-.2-.7-.7-.7l-.3-.2.3-.1h1.7l.3.1-.2.2c-.6 0-.6.5-.6.9v5l-.1.4-.3-.3-4.1-4.7-.2-.2-.1.3-.1 1.7c.1 0 .1 0 0 0zm21.9 3H60l-.3-.1.3-.1c.6 0 .7-.3.7-.8v-4.4c0-.4-.1-.7-.6-.7l-.2-.1.2-.1H64l.3.4v.9l-.4-.5c-.3-.2-.7-.4-1-.4-1.4-.1-1.4-.1-1.4 1.4 0 1.2 0 1.2 1.2 1.2.4 0 .7-.1.8-.6l.2-.2.1.3v1.5l-.1.3-.2-.1c-.1-.9-.7-.6-1.2-.7-.6-.1-.8.1-.7.7l.1 1.5.2.4c.7.5 2.3.1 2.8-.6l.4-.3v.5c-.1.7-.4 1.1-1.2.9-.7-.4-1.2-.3-1.7-.3zm-26-4.1l-.1-1.3c0-.4-.1-.8-.7-.8l-.2-.1.2-.1h1.8l.2.1-.2.2c-.6 0-.6.3-.7.8l-.1 2.8c0 2.2-1.8 3.3-3.8 2.5-1-.4-1.3-1.2-1.3-2.2v-3c0-.5 0-1-.7-.9l-.2-.1.2-.1h2.1l.2.1-.2.2c-.6 0-.6.4-.6.8v3.1c.1 1.5 1.2 2.3 2.5 1.9a2 2 0 0 0 1.3-1.7c.3-.9.3-1.5.3-2.2zm51 .8v2.3c0 .4.1.7.6.7l.3.2-.3.1h-2.1l-.3-.1.3-.2c.6 0 .7-.3.7-.8v-4.7l-.2-.3c-.8-.2-1.7.1-2.2.7l-.2.1v-.3c.2-.5-.1-1.3 1.1-1 1.4.3 2.8.1 4.3.1h.2c1.1-.6.3.4.5.6v.1l-.1.7-.3-.5c-.3-.2-.6-.4-.9-.4-1.3-.1-1.3-.1-1.3 1.2l-.1 1.5z"></path><path fill="#2C292A" d="M53.1 13.3h.9l.2.1-.2.2c-.4 0-.4.2-.3.6l1.6 3.9.2.2.1-.2 1.6-3.9c.1-.3.1-.5-.3-.6l-.3-.2.3-.1h1.6l.2.1-.2.2c-.3.2-.7.4-.8.7l-2.3 5.2-.2.4-.2-.4-2.2-5.3c-.1-.3-.4-.4-.7-.6l-.2-.2.3-.1h.9zm41.1 6.4h-1.1l-.2-.1.2-.2c.6 0 .7-.4.7-.9 0-.9 0-1.6-.5-2.4l-1.1-2-.7-.6-.2-.2.3-.1h1.7l.3.1-.2.2-.2.4 1.1 2.3h.3l1.2-2.2c.2-.3.2-.5-.2-.6l-.2-.2.2-.1h1.5l.2.1-.2.2c-.3.2-.7.4-.9.8-.5.7-1 1.4-1.3 2.2-.2.8-.2 1.7-.2 2.5l.4.3.5.2-.5.1c-.4.2-.6.2-.9.2z"></path><path fill="#2E2A2B" d="M76.1 13.2h.3c.8.1 1 .3 1 1.1l-.1.3-.2-.3c-.3-.3-.6-.7-1-.8-.5-.2-1 0-1.3.5-.3.5-.1 1 .3 1.4l1.3.9c.4.3.8.7 1 1.2.4 1-.2 2.1-1.3 2.3h-1.4c-.8-.1-1.2-.7-1.1-1.5l.1-.2.2.3c.3.7.7 1.2 1.5 1.2.4 0 .9-.3 1.2-.6.3-.4.2-1-.2-1.4l-1.3-1c-.4-.4-.9-.9-1.1-1.5-.2-1.2.7-2 2.1-1.9zm4.3 3.3v-2.2c0-.4-.1-.7-.6-.7a.2.2 0 0 1-.2-.2l.3-.1h2l.3.1-.2.2c-.5 0-.6.3-.6.7v4.4c0 .4.1.7.6.7l.2.2-.3.1h-2l-.3-.1.2-.2c.5 0 .6-.3.6-.8v-2.1z"></path><path fill="#282526" d="M48.7 16.5v-2.3c0-.4-.1-.7-.6-.7l-.2-.1.2-.1h2l.3.1-.3.2c-.4 0-.6.3-.6.6v4.6c0 .4.1.7.6.7l.3.1-.3.1h-2l-.3-.1.3-.2c.5 0 .6-.3.6-.7v-2.2z"></path><path fill="#0E73BA" d="M96.2 2.4c0-.6.5-1.1 1.2-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.2 1.1-.6 0-1.1-.5-1.1-1.1z"></path><path fill="#FDFDFD" d="M9 1.6h1.4l.1.4c-.3 2.2-.1 4.3-.1 6.5l.1 2.3a4.3 4.3 0 0 0 3.6 3.8c.3 0 .6.1.6-.3l.1-.2.5-.1c1.7-.2 2.6-1.2 3.1-2.7.2-.6.3-1.3.3-1.9V3.7l-.2-1.6c0-.2-.1-.4.1-.5h2.2c.2.2.2.4.2.6v8.6c0 3.1-2.8 5.7-5.9 5.7a6 6 0 0 1-4.2-1.6 6.5 6.5 0 0 1-1.8-3v-.2l-.1-.4v-9c-.2-.3-.2-.5 0-.7z"></path><path fill="#CACBCC" d="M26.8 15.1c-.1 4.5-1.5 8.2-5.6 10.5-1.9 1-3.9 1.8-5.9 2.7l-.4.1a.8.8 0 0 1-.2-.5v-2.8l.1-.1.4-.2 2.9-.5c1.4-.4 2.8-1 3.9-2 1.1-.9 2-2 2.8-3.2a12 12 0 0 0 1.5-3.5c.1-.3.1-.6.5-.5z"></path><path fill="#FAFAFA" d="M22.6 1.6h.7c.2.2.1.4.1.6v9.6c0 1.8-.8 3.4-1.9 4.8a8.7 8.7 0 0 1-6.1 3.1H15c-1.3-.1-2.6-.3-3.7-.8l-.5-.4c.2-.3.4-.2.6-.1.8.3 1.5.5 2.4.6h.5c.5 0 .5 0 .6-.5l.1-.5c.2-.2.4-.2.7-.2 3.8-.4 6.3-3.3 6.8-7 .2-1.9.2-3.7.2-5.6v-3c-.2-.2-.3-.5-.1-.6z"></path><path fill="#02497D" d="M14.9 24.9s0 .1 0 0c-.5.3-.9.1-1.4.1-2.1-.2-4.1-1-5.8-2.3A11.5 11.5 0 0 1 4 18.2l-1.1-2.6-.1-.5v-13c0-.2.2-.3.3-.5.3.2.2.4.2.7v4.9c.1 1.8 0 3.7.3 5.5.2 1.5.6 3 1.2 4.4.1.2.1.4.3.5l.2.1.8 1.4c1.1 1.6 2.5 2.9 4.2 3.8 1.1.5 2.3.8 3.6 1 .3 0 .7 0 1 .3.1.2.2.4 0 .7z"></path><path fill="#C7C8CA" d="M14.9 24.9V24c.2-.2.5-.2.8-.2 2.7-.2 5-1.3 6.8-3.3l1-1.3c.1-.2.2-.4.5-.5.5-.6.9-1.3 1.1-2 .5-1.4.9-2.9 1-4.4l.1-2.5V2.3c0-.3-.1-.5.2-.8l.4.3V15c-.1.2-.3.3-.3.5-.5 2.3-1.7 4.2-3.4 5.9-1.9 2-4.3 2.9-7 3.3l-1.2.2z"></path><path fill="#F4F4F4" d="M24.9 1.6h.5c.2.2.2.4.2.6v11.1l-.1.5c-.3.2-.4.6-.5.9a10.4 10.4 0 0 1-8.4 6.9l-1.2.1-.5-.1-.1-.4.1-.5c.2-.2.5-.2.7-.2a9.4 9.4 0 0 0 6.9-3.7c1.4-1.8 2-3.9 2.2-6.2.2-2.8 0-5.5.1-8.3 0-.2-.1-.5.1-.7z"></path><path fill="#EBEBEC" d="M14.9 19.5c4.2 0 7.9-3.3 8.4-7.5V1.5h1c.2.2.1.4.1.6v5.1c-.1 1.6 0 3.3-.3 4.9a9.4 9.4 0 0 1-4.4 6.7 9 9 0 0 1-4.2 1.3l-.6-.1c-.2-.1-.2-.3 0-.5z"></path><path fill="#01518C" d="M14.9 26v2.4l-3.3-1.2c-1.8-1-3.6-1.9-5.2-3.1a8.6 8.6 0 0 1-2.9-4.7c.3-.2.4.1.5.3l1.4 1.9C6.6 23 8 24.1 9.6 24.9a10 10 0 0 0 4.5 1.1c.3-.2.6-.2.8 0z"></path><path fill="#F4F4F4" d="M22.6 1.6v6.3c-.1 1.6-.2 3.2-.6 4.7a7.4 7.4 0 0 1-6.3 5.4l-.8.1h-.1l-.1-.3v-.2l.1-.3.1-.1 2.6-.6c2.1-1 3.4-2.7 3.8-5l.3-3.3V2.5c0-.2-.1-.5.1-.7.4-.2.6-.2.9-.2z"></path><path fill="#EDEDEE" d="M21.8 1.6v7a11 11 0 0 1-1 5 6.6 6.6 0 0 1-5.9 3.6l-.1-.3.1-.5c3.4 0 5.9-2.6 5.9-6V1.5l1 .1zm-6.9 18.5a9.4 9.4 0 0 0 9.2-8.4l.3-10.1h.6v7.6a13 13 0 0 1-1.4 6.4 9.7 9.7 0 0 1-3.7 3.8 8.7 8.7 0 0 1-4.4 1.3l-.6.1-.1-.1v-.4l.1-.2z"></path><path fill="#004E86" d="M14.9 26c-2.4-.1-4.6-.7-6.6-1.9-1.6-1-2.9-2.3-3.9-3.9l-.7-.8-.6-3.8.7 1.4c.6 1.6 1.4 3 2.5 4.3 1.9 2 4.2 3.2 6.9 3.6l1.8.2-.1.9z"></path><path fill="#C4C5C6" d="M25.3 13.9l.1-.5V1.5h1v7.7c0 2.1-.1 4.3-.8 6.3-.3 1.1-.9 2.1-1.4 3.1l-.3.2c-.1-.2 0-.3 0-.4a8.4 8.4 0 0 0 1.1-4.1l.3-.4z"></path><path fill="#C1C2C3" d="M14.9 20.1c-.2.3-.5.2-.8.2a9.2 9.2 0 0 1-7.3-4.7c-1-1.7-1.4-3.5-1.5-5.4-.2-2.7-.1-5.3-.1-8 0-.2-.1-.5.1-.7h.6c.2.2.2.5.2.8v6.5c0 1.3.1 2.6.5 3.8l.1.1.1.5 1 2a8.3 8.3 0 0 0 2.8 2.8c.1.1.3.1.3.3 1.3.8 2.7 1 4.2 1.1-.2.3-.2.5-.2.7z"></path><path fill="#CDCED0" d="M5.3 1.6v6.9c0 1.8.1 3.7.8 5.5.7 1.9 1.9 3.5 3.5 4.7a8.9 8.9 0 0 0 5.2 1.6v.5c-.4.3-.9.2-1.3.1a10 10 0 0 1-7.9-6.2c-.5-1.3-.8-2.6-.9-4-.2-2.8 0-5.5-.1-8.3l.1-.6c.2-.2.4-.2.6-.2z"></path><path fill="#F4F4F4" d="M6.6 13c0-.1 0-.1 0 0-.3-.8-.4-1.6-.4-2.4V2.4c0-.3 0-.5.2-.8h.3l.1.7v6.2c0 1.3.1 2.6.4 3.8a7.9 7.9 0 0 0 7.1 6c.2 0 .4 0 .6.2.1.5-.1.8-.7.7l-3.1-.7h-.4a8.7 8.7 0 0 1-4.1-5.1c-.1-.2 0-.3 0-.4z"></path><path fill="#D8D9DA" d="M4.8 1.6v7.5c0 2.6.5 5 1.9 7.3a9.2 9.2 0 0 0 3.2 3c1.5.9 3.2 1.4 5 1.3v.6c-.4.2-.8.2-1.2.1a11 11 0 0 1-9.1-8.7c-.1-.5-.1-.9-.4-1.4V2.4c0-.3-.1-.6.2-.8h.4z"></path><path fill="#F4F4F4" d="M18.6 1.6c.5 2.7.2 5.4.3 8.1 0 2.2-1.2 3.9-3.1 4.4l-.8.1-.1-.2v-.3l.1-.2.4-.1c1.6-.2 2.6-1.7 2.7-3.3l.1-5.6c0-.8 0-1.7-.3-2.5a.3.3 0 0 1 0-.4h.7z"></path><path fill="#EBEBEC" d="M14.9 18.5c-4 0-7.3-2.8-7.9-6.7a34 34 0 0 1-.3-4.5V1.6h.5l.1.6v6.4c.1 1.4.1 2.8.6 4.1a7.3 7.3 0 0 0 5 4.8c.5.2 1.1.3 1.7.3l.4.1-.1.6z"></path><path fill="#004373" d="M5.2 17.7l-.4-.3c-1-1.8-1.4-3.7-1.5-5.7L3.2 1.6h.6l.1.7v4a44.9 44.9 0 0 0 1.4 10.9c0 .2.1.3-.1.5z"></path><path fill="#F4F4F4" d="M14.9 14.3c.1.5-.2.5-.6.5a4.5 4.5 0 0 1-4-4.3l-.1-7.4.2-1.6h.7c.1.1.1.2 0 .4-.2.7-.2 1.4-.2 2.2v5.8c0 1.3.4 2.4 1.4 3.3.5.5 1.2.8 1.9.9.3 0 .5 0 .7.2z"></path><path fill="#EDEDEE" d="M17.7 1.6c.8 2.4.4 4.8.5 7.2 0 .8-.1 1.6-.3 2.3-.4 1.4-1.5 2.2-3 2.3l-.1-.2.1-.4.3-.1c1.3-.3 1.9-.9 2.1-2.2v-8c0-.4-.1-.7.2-1l.2.1z"></path><path fill="#003F6C" d="M4.4 13.3l-.5-1.9-.2-9.8h.7v9.9c.1.6.3 1.2 0 1.8z"></path><path fill="#00365E" d="M17.4 2.6v1.2c-.2.2-.4.2-.6.2h-4.2l-.4-.1c-.2-.2-.2-.5-.2-.8V2c0-.2 0-.4.2-.5h.1l.1.2c.1.6.1.6.8.6h3.5c.3.1.5.1.7.3z"></path><path fill="#CACBCC" d="M14.9 16.9v.4c-.5.2-1 0-1.5-.1a7.1 7.1 0 0 1-5.3-5.5l-.3-3.5v-6l.1-.6h.4c.2.2.1.4.1.6v3.5V10c.2 3 1.6 5.5 4.9 6.5l.6.1c.4.1.7.1 1 .3z"></path><path fill="#C1C2C3" d="M14.9 16.9a6.3 6.3 0 0 1-6-4.4c-.7-2.1-.7-4.3-.6-6.5V1.6h.2c.2.2.2.4.2.7v4.8l.2 4.1.1.4.1.3c-.1.1 0 .1 0 .2a6 6 0 0 0 2.1 3.1c1.1.9 2.3 1.3 3.7 1.3v.4z"></path><path fill="#D8D9DA" d="M8 1.6v5.8c0 1.5.1 3.1.4 4.6a6.6 6.6 0 0 0 5.9 5.1l.6.1v.3c-.9.2-1.8-.1-2.6-.4a7.3 7.3 0 0 1-4.4-5.4c-.2-.9-.2-1.8-.3-2.8V2.2l.1-.6H8z"></path><path fill="#E1E2E3" d="M14.9 18a7.4 7.4 0 0 1-7.2-5.4c-.5-1.6-.6-3.3-.5-4.9V1.6h.3c.2.2.1.4.1.6v5.5c0 1.6 0 3.3.5 4.9a7 7 0 0 0 5.5 4.9c.4.1.9 0 1.3.2v.3z"></path><path fill="#002E50" d="M17.4 2.6H13c-.6 0-.8-.1-.7-.7v-.3h5.1v1z"></path><path fill="#DBDBDC" d="M14.9 17.7a7.2 7.2 0 0 1-7.1-5.9c-.3-1.7-.3-3.4-.4-5.2V1.5h.3v6.1c.1 1.9 0 3.8.8 5.6a7 7 0 0 0 5.9 4.2l.6.1-.1.2z"></path><path fill="#CDCED0" d="M12.2 1.6v.5c-.2.4-.3.9-.3 1.4v5.9c0 .9.2 1.9.8 2.7.4.5 1 .9 1.6 1l.5.2v.4c-.3.2-.6.1-.8 0a3.5 3.5 0 0 1-2.5-2.5 10 10 0 0 1-.3-2.5V4.2l.2-1.8c.1-.3.1-.6.4-.7l.4-.1z"></path><path fill="#B3B4B6" d="M6.4 1.6v7.9l.2 3.4-.4-.9-.3-3.8V1.6h.5z"></path><path fill="#EBEBEC" d="M14.9 14.3c-2.8-.3-4-2.2-4.1-4.8v-6c0-.7.2-1.3.3-2h.3l.1.5c-.2.7-.2 1.5-.2 2.2v5.5c.1 1.9.8 3.1 2.5 3.8.4.1.8.1 1.1.3v.5z"></path><path fill="#E1E2E3" d="M14.9 13.9c-1.6 0-3-1-3.4-2.6-.2-.9-.3-1.9-.3-2.9l.1-4.7.2-2.1h.5c-.2 1-.4 1.9-.4 2.9l.1 5.6c.1 1.5.8 3.4 3.4 3.6-.2 0-.2.1-.2.2z"></path><path fill="#B3B4B6" d="M9 11.5L8.6 10l-.1-8.4H9v9.9z"></path><path fill="#FDFDFD" d="M91 3.8V2.2c0-.2.2-.4.3-.4.9-.1 1.7 0 2.3.7.6.8.5 1.6.1 2.5-.3.7-1.8 1.1-2.5.8-.2 0-.2-.2-.2-.3V3.8z"></path><path fill="#FAFAFA" d="M32.8 3.9V2.3c0-.2.2-.4.4-.4 1.8-.3 3.1 1.2 2.5 2.9-.3.7-.8 1.1-1.8 1.1-1.1 0-1.1 0-1.1-1v-1z"></path><path fill="#FDFDFD" d="M78.9 5.5c0-1.3.3-2.6 1.5-3.4 1.7-1.1 3.9-.4 4.7 1.6.5 1.2.6 2.5.3 3.8-.3 1.4-1.2 2.4-2.4 2.5-1.4.2-2.6-.3-3.2-1.5-.5-.9-.7-1.9-1-2.9l.1-.1z"></path><path fill="#FAFAFA" d="M53.5 6.3c-1.2 0-1.2 0-.8-1.1l.7-1.9.2-.3.2.3.8 2.5c.2.4 0 .5-.4.5h-.7zm14.8 8.8v-.4c.1-.4 0-.9.2-1 .4-.3 1.3.1 1.7.5.3.5.3 1.4 0 1.8-.3.4-1.2.7-1.7.5l-.2-.3v-1.1z"></path><path fill="#F4F4F4" d="M96.8 3c-.4-.4-.4-.9 0-1.2.2-.2.8-.3 1-.1.5.2.5.7.2 1.2h-.1c-.2-.1-.4-.3-.3-.6 0-.3-.1-.3-.3-.3-.3 0-.2.1-.2.3 0 .3 0 .5-.2.7h-.1z"></path><path fill="#EBEBEC" d="M96.8 3v-.2l.5-.1h.1l.5.2h.1c-.3.5-.7.5-1.2.1z"></path><path fill="#B3B4B6" d="M9.1 11.9l-.1-.1.1-.1v.2z"></path><path fill="#FAFAFA" d="M25.3 13.9c0 1.6-.4 3.2-1.2 4.6l-.1.3c-1.1 1.6-2.4 3-4.1 3.9a9.7 9.7 0 0 1-4 1.2l-.9.1-4.2-.9a.8.8 0 0 1-.4-.2c-.1-.3.1-.3.2-.3l.5.1c.9.3 1.9.5 2.9.5.8 0 .8 0 .8-.8v-.7l.1-.2c2.7 0 5.1-.9 7.1-2.7 1.5-1.3 2.4-2.9 3-4.7l.3-.2z"></path><path fill="#EBEBEC" d="M14.9 21.8v.8c-.2.2-.3.1-.5.1-3.2-.3-5.9-1.5-8.2-3.8l-.8-1-.1-.1-.8-3.5c.3-.2.4.1.4.3l.5 1.3c1.8 3.3 4.5 5.3 8.3 5.8.4-.1.8-.3 1.2.1z"></path><path fill="#F4F4F4" d="M5.3 17.8l.4.2c1.9 2.4 4.4 3.8 7.4 4.3l1.7.2c0 1-.3 1.2-1.6.9l-2.6-.6-.4.1a10.1 10.1 0 0 1-4.9-5.1z"></path><path fill="#E1E2E3" d="M14.9 21.8c-1.1-.2-2.3-.3-3.4-.6a9.4 9.4 0 0 1-5-3.5c-.7-1-1.2-2.1-1.8-3.1l-.3-.3-.1-.9v-1.8l.3 1a10 10 0 0 0 3.5 6.2 10 10 0 0 0 6.6 2.5v.4c.2-.1.2 0 .2.1z"></path><path fill="#B3B4B6" d="M6.6 13l.1.3-.1-.3z"></path><path fill="#075C99" d="M17.4 8.8v1.9l-.6.1h-4.2l-.2-.1c-.4-.6-.4-1.3-.2-2l.4-.1h4.2c.2.1.4 0 .6.2z"></path><path fill="#004E86" d="M17.4 8.8l-5.1-.1c-.4-.5-.3-1.1-.1-1.7.2-.2.4-.1.7-.1h3.9c.2 0 .5 0 .7.2l-.1 1.7z"></path><path fill="#0264AB" d="M12.3 10.8l2.4-.1h2.7c-.2 1.3-1.1 2.1-2.5 2.2l-.7.1c-.9-.2-1.6-.8-1.9-1.7v-.5z"></path><path fill="#02497D" d="M17.4 7h-5.1c-.4-.5-.3-1-.1-1.6.2-.2.4-.1.7-.1h3.9c.2 0 .5 0 .7.2L17.4 7z"></path><path fill="#003F6C" d="M17.4 5.4h-5.1c-.3-.4-.3-1.1 0-1.5l5.1-.1v1.6z"></path><path fill="#C1C2C3" d="M12.3 3.9v4.8l.1 2.1c.2 1.3 1.1 2 2.5 2.1v.3a3 3 0 0 1-3-3l-.1-7.1c0-.4.3-.8.5-1.1v1.9z"></path><path fill="#0E73BA" d="M97.9 2.9l-.5-.2c0 .1-.2-.1-.1.1l-.5.1.2-.6v-.4l.7.1.1.4.1.5z"></path><path fill="#D8D9DA" d="M97.5 2.2l-.2.1-.1-.2.1-.1.2.2z"></path><path fill="#EBEBEC" d="M97.4 2.8l-.1-.2.1.2c0-.1 0 0 0 0z"></path></svg>
                                </a>
                            </li>

                        </ul>
                    </div>
                    </div>
                    
                    <div className = {'container-fluid'} style = {{margin:'auto',backgroundColor:'#2c5454',padding:'10px 0'}}>
                        <ul style={{fontSize:'14px'}} className={'d-flex container-fluid'}>
                            <li><a className={'text-white mx-2 bold'} href='/'>About us</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Careers</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Feedback</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Media room</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Ad Choices</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Advertise with us</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Agent support</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Privacy</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Terms</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Home Made</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Tech Blog</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Sitemap</a></li>
                        </ul>
                        <h6 className={'text-white text-left container-fluid mx-2'}>PRODUCTS</h6>
                        <ul style={{fontSize:'14px'}} className={'d-flex container-fluid'}>
                            <li><a className={'text-white mx-2 bold'} href='/'>Leads & Branding</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>ListHub</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Top Producer</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Market Snapshot</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>FiveStreet</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Relocation</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Moving.com</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>International</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>SeniorHousingNet.com</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Doorsteps</a></li>
                        </ul>
                        <h6 className={'text-white text-left container-fluid mx-2'}>NEWS CORP</h6>
                        <ul style={{fontSize:'14px'}} className={'d-flex container-fluid'}>
                            <li><a className={'text-white mx-2 bold'} href='/'>Barrons</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Checkout 51</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Financial News</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Harper Collins</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Mansion Global</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Market Watch</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>New York Post</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>REA Group</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Storyful</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Wall Street Journal</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Makaan.com</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>Housing.com</a></li>
                            <li><a className={'text-white mx-2 bold'} href='/'>PropTiger.com</a></li>
                        </ul>
                        <p className={'text-left ml-4 text-white mb-0'}><small>© 1995-2019 </small><a className={'text-white'} href='/'>National Association of REALTORS® </a><small>and </small><a className={'text-white'} href="/">Move, Inc. </a><small>All rights reserved.</small></p>

                    </div>
                </footer>
            </div>


        ); 
    }
}
export default Home;

//STYLING
const reltrorLogoStyle = {width:'20px',height:'30px',marginTop:'auto'};
const mainImgDivStyle = {backgroundImage:'url(https://static.rdc.moveaws.com/images/hero/veteran_united_prod/hp-takeover-desktop.jpg)'};
const homeSearchParagraph = {fontSize:'56px',color:'white',paddingTop:'100px'};
const h3Style = {color:'#757575',fontSize:'15px',textAlign:'left'};
const headerStyle = {margin:'20px 0',fontSize:'24px',textAlign:'left'};
const secondBackgroundImgStyle = {backgroundImage:'url(https://static.rdc.moveaws.com/images/hero/holiday/hp-takeover-desktop.jpg)',backgroundSize:'cover',backgroundRepeat:'no-repeat'};
const trendsStyle = {color:'white',fontSize:'20px',paddingTop:'180px'};
const secondBackgroundh3Style = {fontSize:'1.5em',margin:'40px auto',color:'white'};
const readMoreBtnStyle = {color:'white',border:'1px solid white',background:'transparent',fontSize:'16px',borderRadius:'25px',padding:'10px'};
const beReadyToBuySpan = {fontSize:'14px',display:'flex',justifyContent:'center',alignItems:'center'};
const mainBackgroundLinksStyle = {textDecoration:'none',color:'white',fontSize:'14px'};
const recommendedHoodH2Style = {fontSize:'2.25em',marginTop:'50px',textAlign:'left'};