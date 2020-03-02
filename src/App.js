import React from 'react';
import './styling/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
}from 'react-router-dom';

import BuildApartmentsGallery from './components/apartmentsgallery';
import BuildCitiesGallery from './components/citiesgallery';
import Apartment from './components/singleapartment.jsx';
import BuildNavigation from './components/buildnavigation.jsx';
import Home from './components/home.jsx';
import StudentForm from './components/form.jsx';
import Profile from './components/userProfile';
import NewApartmentForm from './components/addNewApartment';
import UserApartments from './components/userApartments';
import UserWishList from './components/userWishList';
import AdminPage from './components/adminPage';
import PendingApartments from './components/pendingApartments';
import ApprovedApartments from './components/approvedApartments';
import RemovedApartments from './components/removedApartments';
import Login from './components/login';
import Register from './components/registration';

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Router>
        <BuildNavigation/>
          <div>
            <Switch>
                <Route path='/apartments' component={BuildApartmentsGallery}/>

                <Route path='/cities' component={BuildCitiesGallery}/>

                <Route path='/apartment/:apartment_id' component={Apartment}/>

                <Route path='/form' component={StudentForm}/>

                <Route path='/user_profile' component={Profile}/>

                <Route path='/new_apartment' component={NewApartmentForm}/>

                <Route path='/my_apartments' component={UserApartments}/>

                <Route path='/my_wish_list' component={UserWishList}/>

                <Route path='/admin_page' component={AdminPage}/>

                <Route path='/pending_apartments' component={PendingApartments}/>

                <Route path='/approved_apartments' component={ApprovedApartments}/>

                <Route path='/removed_apartments' component={RemovedApartments}/>

                <Route path='/login_page' component={Login}/>

                <Route path='/registration_page' component={Register}/>

                <Route path='/' component={Home}/>

              </Switch>
          </div>
        </Router>
      </div>
    );    
  }
}  
export default App;
