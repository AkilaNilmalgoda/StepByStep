import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/navbar'
// import Navigation from './components/Navigation/Navigation'
//import { Router } from 'react-router-dom';
//import Switch from 'react-bootstrap/esm/Switch';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Home from './components/Home/HomeMain';
import Landing from './components/Landing/LandingMain'
import AboutUs from './components/About Us/AboutUsMain';
import Courses from './components/Courses/CoursesMain';
import Prices from './components/Prices/PricesMain';
import Contacts from './components/Contacts/ContactUsMain';


function App() {
  return (
    <>
      <Router>
        <div className="app-container">
        <Navbar/>
        {/* <Navigation/> */}
        <Switch>
          {/* <Route path='/' exact component={Home} /> */}
          <Route path='/' exact component={Landing} />
          <Route path='/AboutUs' component={AboutUs} />
          <Route path='/Courses' component={Courses} />
          <Route path='/Prices' component={Prices} />
          <Route path='/Contacts' component={Contacts} />
        </Switch>
        </div>
        
      </Router>
    </>
  );
}

export default App;
