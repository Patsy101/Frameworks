import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from '../Navbar/NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/Home Developed by PatrickT">
          <br></br>
          <img
            src={require('../../styling/airnzlogo.png')}
            alt="logo"
            className="airnz"
          />
          <p>Home</p>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/TravelAlerts" activeStyle>
            Travel Alerts
          </NavLink>
          <NavLink to="/Airpoints" activeStyle>
            Airpoints™
          </NavLink>
          <NavLink to="/Manage Booking" activeStyle>
            Manage Booking
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/BookNow">BookNow</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
