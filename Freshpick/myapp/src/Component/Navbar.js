import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCartSharp } from "react-icons/io5";
import PopoverPositionedExample from './pop_overlay';


function OffcanvasExample() {
  return (
    <>
      {['sm', ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Fresh</div> <div style={{color:'#54b226'}}>Pick</div></div> </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
           
              <Offcanvas.Body>
              <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ width: '1400px' }}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-left flex-grow-1 pe-3  px-4">
                  
                  <Button variant="success" className='px-4' style={{width:' '}}> <IoCartSharp style={{fontSize:'20px'}} /> My Cart</Button>
                  
                  <PopoverPositionedExample> </PopoverPositionedExample>
                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                  {/* <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown> */}
                </Nav>
         
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;