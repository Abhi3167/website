import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyOrder = () => {
  const reduxOrder = useSelector((state) => state.oder.oder);
  const [myorder, setMyOrder] = useState([]);

  // Load from localStorage on first mount
  useEffect(() => {
    const storedOrder = localStorage.getItem('order');
    if (reduxOrder) {
      setMyOrder(reduxOrder || []);
    
    } else {
      setMyOrder(JSON.parse(storedOrder));
    }
  }, [reduxOrder]);

  // Save to localStorage whenever reduxOrder changes
  useEffect(() => {
    if (reduxOrder && reduxOrder.length > 0) {
      localStorage.setItem('order', JSON.stringify(reduxOrder));
    }
  }, [reduxOrder]);

  const flatOrder = myorder.flat();

  return (
    <div className="container py-5" style={{ backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h2 className="text-center mb-5" style={{ fontSize: '2rem', color: '#333' }}>
        🛒 My Orders
      </h2>
      <div className="row g-4">
        {flatOrder.map((order, index) => (
          <div className="col-12 col-md-6 col-lg-4" key={index}>
            <div
              className="card h-100 shadow-sm"
              style={{
                borderRadius: '15px',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={order.image}
                alt={order.name}
                className="card-img-top p-3"
                style={{ height: '200px', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{order.name}</h5>
                <p className="card-text">Category: {order.cat}</p>
                <p className="card-text">Weight: {order.wt}</p>
                <p className="card-text fw-bold text-success">₹{order.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrder;