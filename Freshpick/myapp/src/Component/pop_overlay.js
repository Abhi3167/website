import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { CgProfile } from "react-icons/cg";
import './pop.css';
import { useNavigate } from 'react-router-dom';
function PopoverPositionedExample() {
  let navigate=useNavigate()
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3" style={{fontSize:'24px'}}>Your Account</Popover.Header>
              <Popover.Body className='p-0'>
                {/* <strong>Holy guacamole!</strong> Check this info. */}
               <div  style={{fontSize:'32px', fontWeight:'bold'}}>
               <div className='list' >personal detail</div>
                <div className='list' onClick={()=>{navigate('/cart')}}>My Orders</div>
                <div className='list'>My Address</div>
                <div className='list'>Payment</div>
                <div className='list'>Share the app</div>
                <div className='list' >About us</div>
                <div className='list' >Logout</div>
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