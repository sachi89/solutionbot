import React from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { SiProbot } from 'react-icons/si';

//component for navigation bar
function Navigation() {
  return (
    <div>
        <div>
            <Navbar expand="lg"> {/* navbar and nav from react-bootstrap */}
            {/* SolutionBot logo and link to homepage */}
            <Navbar.Brand href="/">
            <div className='d-flex' style={{alignItems:"center"}}>
            <SiProbot style={{marginLeft:"20px", marginBottom:"10px",width:"40px", height:"40px", color:"darkblue" }}/>
            <h1 style={{fontFamily:"sans-serif",color:"black", paddingLeft:"10px"}}>SolutionBot</h1>
            </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navigation">
              {/*Link component from react-router-dom used to route to different components*/}
                {/* links to Chatbox component */}
                <Nav.Link> <Link to={"/"}><h2 style={{fontFamily:"sans-serif", textDecorationLine: "none", color:"black", paddingLeft:"40px"}}>Chat</h2></Link></Nav.Link>
                {/* links to About component */}
                <Nav.Link> <Link to={"/About"}><h2 style={{fontFamily:"sans-serif",color:"black", paddingLeft:"20px"}}>About</h2></Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
    </div>
  );
}

export default Navigation;
