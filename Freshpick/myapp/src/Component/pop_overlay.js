import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { CgProfile } from "react-icons/cg";
import './pop.css';
import { useNavigate } from 'react-router-dom';
function PopoverPositionedExample() {
  let navigate=useNavigate()
  let getLogout=()=>{
    localStorage.removeItem('login')
    navigate('/login')
  }
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
        className='lap'
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}   className='lap'>
              <Popover.Header as="h3" style={{fontSize:'24px'}}>Your Account</Popover.Header>
              <Popover.Body className='p-0'>
                {/* <strong>Holy guacamole!</strong> Check this info. */}
               <div  style={{fontSize:'32px', fontWeight:'bold'}}   className='lap'>
               <div className='list' >personal detail</div>
                <div className='list' onClick={()=>{navigate('/cart')}}>My Orders</div>
                <div className='list'>My Address</div>
                <div className='list'>Payment</div>
                <div className='list' onClick={()=>{navigate('/about_us')}} >About us</div>
                <div className='list text-danger' onClick={getLogout} >Logout</div>
               </div>
              </Popover.Body>
            </Popover>
          }
        >
          <Button variant="secondary" className='px-3 mx-3' ><CgProfile /></Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;