import React from 'react';
import {Carousel} from 'react-bootstrap';
import Heart from './heart.jsx';

class Apartment extends React.Component{
    
    constructor(props){
        super(props);
        

        this.state={
            apartment:'',
            appImages:[],
            loading: true,
        }
    }
    
    async componentDidMount(){
        try{
            const apartment = await fetch(`http://localhost:3000/apartments/${this.props.match.params.id}`);
            const data = await apartment.json();
            this.onSuccess(data);

        }catch(error){
            throw new Error(`get aaprtment failed with:${error.message}`);
        }
        
        try{
            const apartmentImages = await fetch(`http://localhost:3000/apartments/${this.props.match.params.id}/images`);
            const imagesData = await apartmentImages.json();
            this.handleSingleSuccess(imagesData);
        }catch(error){
            throw new Error(`get apartment failed with: ${error.message}`);
        }        
    }

    handleSingleSuccess = (success) =>{
           const curImages = Object.values(success[0])[0].split(',').map((image,i)=>'http://localhost:3000/'+image);
           this.setState({appImages:curImages})
        }

    onSuccess = (success) => {
        const appId= parseInt(this.props.match.params.id);
        const apartment = success.find(apartment => apartment.id === appId);
        this.setState({
            apartment: apartment,
            appSqft:apartment.sqft,
            loading: false
        })
    }
    
    render(){
        const {apartment, loading}=this.state;
        const curCarouselImages=this.state.appImages.map((url,u)=>{return <Carousel.Item key={u}><img alt='/' style={{height:'550px',width:'100%'}} src={`${url}`}/></Carousel.Item>})
        return(
            loading ? <p>LOADING...</p> :
            <div>
            <div className={'container position-relative'}>
                <Carousel className={'position-relative'}>  
                    {curCarouselImages}
                </Carousel>
                <form style={formStyle} className={'position-absolute d-flex flex-column p-2'} action="">
                    <p className={'text-center bold'}>More about this property</p>
                    <input className={'mb-2 rounded'} placeholder='Full Name' type="text"/>
                    <input className={'mb-2 rounded'} placeholder='Email Address' type="text"/>
                    <input className={'mb-2 rounded'} placeholder='Phone Number' type="text"/>
                    <textarea className={'mb-2 rounded'} placeholder='I am interested in 109-76 141st St.'></textarea>
                    <button id='agenthover' style={emailAgentStyle} className={'bg-dark text-white'}>Email Agent</button>  
                </form>
                <div style={{position:'absolute',top:'90%'}} className={'d-flex'}>
                    <div className={'bold text-white p-1 mx-2'} style={{backgroundColor:'green',fontSize:'12px'}}>10 Hours Ago</div>
                    <div className={'bold mx-2'} style={sqftWrapperStyle}>
                        <span style={{color:"white"}}>{apartment.for_sale && "For Sale"}</span>
                        <span style={{color:"white"}}>{apartment.for_rent && "For Rent"}</span>
                    </div>
                    <div className={'bold mx-2'} style={sqftWrapperStyle}>
                        <span style={{color:"white"}}>{this.state.appSqft} sqft</span>
                    </div>
                </div>
                <div className={'d-flex justify-content-center align-items-center'} style={heartWrapperStyle}>
                    <Heart/>

                </div>
                
                
            </div>
            <div style={{borderBottom:'1px solid grey',width:'80%'}} className={'container mt-4'}>
                <p className={'bold'} style={{fontSize:'30px'}}>{apartment.price/1000000} Million $</p>
                <ul className={'d-flex'}>
                    <li style={{fontSize:'20px'}} className={'mr-3'}>{apartment.number_of_bath}<span className={'text-black-50 ml-1'}>bed</span></li>
                    <li style={{fontSize:'20px'}} className={'mr-3'}>{apartment.number_of_room}<span className={'text-black-50 ml-1'}>bath</span></li>
                    <li style={{fontSize:'20px'}}>{apartment.sqft}<span className={'text-black-50 ml-1'}>sqft lot</span></li>

                </ul>
                <p style={{fontSize:'20px'}} className={'bold'}>Property Address: {apartment.address}</p>
                {/* <div style={{top:'105%',right:'10%'}} id={"map-container-google-1"} className={"z-depth-1-half map-container position-absolute"} >
                    <iframe src={"https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder={"0"}
                    style={{border:"0"}}></iframe>
                </div> */}
            </div>
            
            
                

            
        </div>
        );
    }
}
export default Apartment;

//STYLING
const formStyle={right:'15px',top:'0',width:'225px',backgroundColor:'#eaeaea'}
const emailAgentStyle={borderRadius:'25px',border:'none'}
const sqftWrapperStyle={backgroundColor:'rgba(0, 0, 0,.6)',height:'fit-content',width:'fit-content',padding:'0 5px'}
const heartWrapperStyle={width:'60px',height:'60px',borderRadius:'100%',backgroundColor:'#f60707',position:'absolute',bottom:'-20px',right:'20%'}