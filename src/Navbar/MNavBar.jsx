import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import './Nav.css'

const MNavBar = () => {
  return (
    <div>
      <section id="home" >
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        
        <Navbar.Brand href="gotohome"><h2>Saloni Chourasiya</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px',display:'flex',alignItems:'center' }}
            navbarScroll
          >
              {/* <ScrollLink to="home" smooth={true} duration={500}>
                  <Nav.Link><h4>Home</h4></Nav.Link>
                </ScrollLink> */}
                <ScrollLink to="skills" smooth={true} duration={500}>
                  <Nav.Link><h4>Skills</h4></Nav.Link>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500}>
                  <Nav.Link><h4>Projects</h4></Nav.Link>
                </ScrollLink>


            <NavDropdown title="About" style={{fontSize:"25px",fontWeight:'500',marginTop:"-8px"}} id="navbarScrollingDropdown" >
              <NavDropdown.Item href="https://drive.google.com/uc?export=download&id=1IZWXFrQU_AsCxRH6KBLreYusGAaW7UN2" download="Resume.pdf">Resume</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/saloni680">Github</NavDropdown.Item>
              <NavDropdown.Item href="https://www.linkedin.com/in/saloni-chourasiya-261600195/">LinkedIn</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </section>
    </div>
  )
}

export default MNavBar