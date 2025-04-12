import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoCartSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import PopoverPositionedExample from './pop_overlay';
import { useDispatch } from 'react-redux';
import { mysearchdataredux } from './store/Searchslice';
import { CgProfile } from "react-icons/cg";
import './Navbar.css'
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

function OffcanvasExample() {
  let dispatch=useDispatch()
  let navigate=useNavigate()
  let [search, setSearch] = useState('')
  // const items=[
  //   { id: 1, name: 'Apple', price: 100, image: 'https://example.com/apple.jpg' },
  //   { id: 2, name: 'Banana', price: 50, image: 'https://example.com/banana.jpg' },
  //   { id: 3, name: 'Orange', price: 80, image: 'https://example.com/orange.jpg' },
  //   { id: 4, name: 'Mango', price: 120, image: 'https://example.com/mango.jpg' },
  //   { id: 5, name: 'Grapes', price: 90, image: 'https://example.com/grapes.jpg' },
  //   { id: 6, name: 'Pineapple', price: 150, image: 'https://example.com/pineapple.jpg' },
  //   { id: 7, name: 'Strawberry', price: 200, image: 'https://example.com/strawberry.jpg' },
  //   { id: 8, name: 'Watermelon', price: 70, image: 'https://example.com/watermelon.jpg' },
  //   { id: 9, name: 'Blueberry', price: 250, image: 'https://example.com/blueberry.jpg' },
  //   { id: 10, name: 'Peach', price: 130, image: 'https://example.com/peach.jpg' }]

 let getsearch=(e)=>{
  if(e.keyCode===13)
  {
    console.log("enter")
    e.preventDefault()
    getsearchdata()
  }
  else
  {
    console.log("not")
  }
 }

  let getsearchdata=()=>
  {
   dispatch( mysearchdataredux(search))
    console.log(search)
    navigate(`/search/${search}`)
 
  }
  let getLogout=()=>{
    localStorage.removeItem('login')
    navigate('/login')
  }
  return (
    <>
      {['sm', ].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3 sticky-top">
          <Container fluid>
            <Navbar.Brand href="#" onClick={()=>{ navigate('/home')}}><div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Fresh</div> <div style={{color:'#54b226'}}>Pick</div></div> </Navbar.Brand>
       <div>
       <Navbar.Brand href="#" onClick={()=>{ navigate('/cart')}}> <FaShoppingCart className='ic2' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className='nav-t' >
            <CgProfile  className='ic' > </CgProfile>
            
            </Navbar.Toggle>
       </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Fresh</div> <div style={{color:'#54b226'}}>Pick</div></div>
                </Offcanvas.Title>
              </Offcanvas.Header>
           
              <Offcanvas.Body>
              <Form className="d-flex mob-d">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ width: '1400px' }}
                    
                    onChange={(e)=>{setSearch(e.target.value)}}  
                    onKeyDown={getsearch}
                  />
                  <Button onClick={getsearchdata}  variant="outline-success">Search</Button>
                </Form>
                <Nav className="justify-content-left flex-grow-1 pe-3  px-4">
                  
                  <Button variant="success" className='px-4 mob-d' style={{width:' '}} onClick={()=>{navigate('/cart')}}> <IoCartSharp style={{fontSize:'20px'}} /> My Cart</Button>
               
   {window.innerWidth>450 ?            <PopoverPositionedExample className='lap'> </PopoverPositionedExample>:null}
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
                <div className='md-nav-item'  style={{fontSize:'24px', fontWeight:'bold'}}>
               <div className='list' >Personal detail</div>
                <div className='list' onClick={()=>{navigate('/cart')}}>My Orders</div>
                <div className='list'>My Address</div>
                <div className='list'>Payment</div>
                <div className='list' onClick={()=>{navigate('/about_us')}}>About us</div>
                <div className='list text-danger' onClick={getLogout} >Logout</div>
               </div>
              
         
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          <div className=' justify-content-center d-flex text-center w-100 d-lg-none'>

          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{ width: '70vw' }}
                    onChange={(e)=>{setSearch(e.target.value)}}  
                    onKeyDown={getsearch}
                  />
                  <Button  onClick={getsearchdata} variant="outline-success">Search</Button>
                </Form>
                
          
          </div>
        </Navbar>

       
      ))}
    </>
  );
}

export default OffcanvasExample;