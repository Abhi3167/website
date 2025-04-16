import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate ,useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import './detail.css'
import { useState } from 'react';
import More_items from './More_items';
const Detail = () => {

  
    let [show, setShow] = useState(true);
    
    const navigate = useNavigate();
    const data = useSelector((state) => state.detail);
    console.log(data,"data")
    console.log(window.scrollY,"scrollY")

    // window.scrollY=0
  return <>
           
  
       <Container className="mt-4">
            Back Button
            <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3">
                ← Back
            </Button>
            { show ?  <div className='loader'>
        <div className='LODER2'>
        <Spinner animation="grow" />
           <Spinner animation="grow" />
           <Spinner animation="grow" />
        </div>
          </div>:null}

       {
        setTimeout(() => {
            setShow(false)

        }, 3000)
        
       }
<div className={`container ${show ? 'd-none' : ''}`}>
{ (
                <Row className={`align-items-center  mt-4 ${show ? 'd-none' : ''}`}>
                    {/* Product Image */}
                    <Col md={5} className="text-center">
                        <Card className="shadow-lg">
                            <Card.Img 
                                variant="top" 
                                src={data.thumbnail} 
                                className="img-fluid p-3 rounded"
                                style={{ maxHeight: '400px', objectFit: 'cover' }}
                            />
                        </Card>
                    </Col>

                    {/* Product Details */}
                    <Col md={7}>
                        <Card className="p-4 shadow-lg">
                            <Card.Body>
                                <Card.Title className="fw-bold display-6">{data.title}</Card.Title>
                                <Card.Text className="text-muted">{data.description}</Card.Text>
                                
                                <hr />

                                <Card.Text><b>Category:</b> {data.category}</Card.Text>
                                <Card.Text><b>Brand:</b> {data.brand}</Card.Text>
                                <Card.Text><b>Price:</b> ₹{data.price}</Card.Text>
                                <Card.Text><b>Stock Available:</b> {data.stock}</Card.Text>
                                <Card.Text><b>Rating:</b> ⭐ {data.rating}</Card.Text>

                                {/* <Button 
                                    variant="success" 
                                    className="mt-3 w-100 p-2"
                                    onClick={() => addToCart(data)}
                                >
                                    🛒 Add to Cart
                                </Button> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            )}
            {/* // )
            // :(<p className="text-center mt-4 fs-3">No products found</p>)} */}

            {/* Additional Images */}
            {data.images && data.images.length > 0 && (
                <>
                    <h3 className="mt-5 text-center">More Images</h3>
                    <Row className="text-center mt-3">
                        {data.images.map((image, index) => (
                            <Col md={3} key={index}>
                                <div className="p-2">
                                    <Card.Img src={image} className="img-fluid rounded" />
                                </div>
                            </Col>
                        ))}
                    </Row>
                </>
            )}

            {/* Reviews Section */}
            { data.reviews && data.reviews.length > 0 && (
                <>
                    <h3 className="mt-5 text-center">Customer Reviews</h3>
                    <Row className="mt-3">
                        {data.reviews.map((review, index) => (
                            <Col md={4} key={index}>
                                <div className="p-3 shadow-sm">
                                    <Card.Text><b>⭐ Rating:</b> {review.rating}</Card.Text>
                                    <Card.Text><b>📝 Comment:</b> {review.comment}</Card.Text>
                                    <Card.Text className="text-muted"><b>📅 Date:</b> {review.date.toLocaleString()}</Card.Text>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
            <More_items></More_items>
            </div>
        </Container>


  </>
}

export default Detail
