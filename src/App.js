import React from 'react';
import './styling/App.css';
import BuildApartmentsGallery from './components/apartmentsgallery';
import BuildCitiesGallery from './components/citiesgallery';
import Apartment from './components/singleapartment.jsx';
import BuildNavigation from './components/buildnavigation.jsx';
import Home from './components/home.jsx';
import StudentForm from './components/form.jsx';
import Profile from './components/userProfile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
}from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Router>
        <BuildNavigation/>
          <div>
            <nav>
              <ul style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <li>
                  <Link to="/"><button style={linksBtnStyle}>Go to Home Page</button></Link>
                </li>
                <li style={{margin:'25px 50px'}} id='apartments'>
                  <Link to='/apartments'><button style={linksBtnStyle}>Show Apartments Gallery</button></Link>   
                </li>
                <li id='cities'>
                  <Link to='/cities'><button style={linksBtnStyle}>Show Cities Gallery</button></Link>
                </li>
                <li>
                <Link to='/form'><button style={linksBtnStyle}>Show Form</button></Link>

                </li>
              </ul>
            </nav>
            <Switch>
                <Route path='/apartments'>
                  <BuildApartmentsGallery/>
                </Route>
                <Route path='/cities'> 
                  <BuildCitiesGallery/>
                </Route>
                <Route path='/apartment/:id' component={Apartment}/>
                <Route path='/form' component={StudentForm}>
                  
                </Route>
                <Route path='/user_profile' component={Profile}>
                  
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
              </Switch>
          </div>
        </Router>
      </div>
    );    
  }
}  



export default App;
const linksBtnStyle={width:'100px',height:'100px',borderRadius:'50%',background:'grey',color:'white',border:'none'}
