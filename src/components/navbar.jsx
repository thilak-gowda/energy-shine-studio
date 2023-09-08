import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './images/logo.png'


import NavDropdown from 'react-bootstrap/NavDropdown';

function NavScrollExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container className=''>
                <Navbar.Brand href="#" className='namelogo'><img src={logo} alt="" className='logoWidth' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className=''>
                    <Nav
                        className="me-auto my-2 my-lg-0 d-flex justify-content-end w-100"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        {/* <Nav.Link href="#skills">SKILLS</Nav.Link>
                        <Nav.Link href="#experience">EXPERIENCE</Nav.Link>

                        <Nav.Link href="#projects">
                            PROJECTES
                        </Nav.Link>

                        <Nav.Link href="#experties" >EXPERTISE</Nav.Link> */}


                        <Nav.Link href="#contact" className='navitem px-3'>CONTACT</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavScrollExample;