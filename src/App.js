import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter} from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Navbar from './Navbar.jsx';
import {Switch, Route, Redirect} from 'react-router-dom';
import Footer from './Footer';

//on any error redirecting to the home page
//here we willl be using <Switch for switching between the urls>

const App  = () => { 
  return (
    <>
    <Navbar/>
   
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route exact path = '/about' component = {About}/>
        <Route exact path = '/service' component = {Service}/>
        <Route exact path = '/contact' component = {Contact}/>
        <Redirect to = '/' />
      </Switch>
      <Footer/>    
    </>

  );
}

export default App;
