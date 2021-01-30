import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
// import {BrowserRouter as Router} from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
// import Navbar from './Navbar.jsx';
// import {Switch, Route, Redirect} from 'react-router-dom';

const Navbar = () => { 
  // const Style  = {
  //   width: '100%'
  // };

  return (
    <>
      
      <div className = "container-fluid nav bg" >
        <div className = 'row'>
          <div className = "col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">karishma's Ecomm</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <NavLink 
              activeClassName = "menu_active" 
              exact  
              className="nav-link active" 
              aria-current = "page"  
              to ="/">Home <span 
              className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
              activeClassName = "menu_active"  
              exact 
              className="nav-link active" 
              aria-current = "page"  
              to ="/service">
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink activeClassName = "menu_active" 
              exact  
              className="nav-link active" 
              aria-current = "page" 
              to ="/about">
                About
                </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
              activeClassName = "menu_active"  
              exact 
              className="nav-link active"
              aria-current = "page" 
              to ="/contact">
                Contact
              </NavLink>
            </li>
            {/* <Switch> */}
            {/* <Route exact path = '/' component = {Home}/>
            <Route exact path = '/about' component = {About}/>
            <Route exact path = '/service' component = {Service}/>
            <Route exact path = '/contact' component = {Contact}/> */}
            {/* </Switch> */}


            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="#">Action</a>
                <a className="dropdown-item" href="#">Another action</a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Something else here</a>
              </div>
            </li> */}
            {/* <li className ="nav-item">
              <a className ="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li> */}
            </ul>
            {/* <form className ="form-inline my-2 my-lg-0">
              <input className ="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className ="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            </div>
            </nav>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Navbar;