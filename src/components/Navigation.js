import React from 'react';
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//component for navigation bar
function Navigation() {
  return (
    <div>
        <div>
            <Navbar expand="lg"> {/* navbar and nav from react-bootstrap */}
            {/* SolutionBot logo and link to homepage */}
            <Navbar.Brand href="/"><img src="../images/logo.png" alt="logo" width="350" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navigation">
              {/*Link component from react-router-dom used to route to different components*/}
                {/* links to Chatbox component */}
                <Nav.Link> <Link to={"/"}><img src="../images/chat.png" alt="chat" width="72" className="grow" /></Link></Nav.Link>
                {/* links to About component */}
                <Nav.Link> <Link to={"/About"}><img src="../images/about.png" alt="about" width="94" className="grow" /></Link></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          </div>
    </div>
  );
}

export default Navigation;
