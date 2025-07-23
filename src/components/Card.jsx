import React, { useState } from 'react';
export default function Card() {
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        setQuantity(1);
    };

    const handleIncrement = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        } else {
            setQuantity(0); // Back to "Add to Cart"
        }
    };
    const price=49
    return (
        <div>
            <div className="card m-5 " style={{ width: "18rem" }}>
                <img src="https://th.bing.com/th/id/R.1746905e79820c611a75f362be285401?rik=Om5Rt8artWAu4A&riu=http%3a%2f%2fwww.valleyspuds.com%2fwp-content%2fuploads%2fRusset-Potatoes-cut.jpg&ehk=%2f9WbC1j%2fDMKQkwnb8Q9l7NfVGeVMrHuQmCWM%2fR9kpg8%3d&risl=&pid=ImgRaw&r=0" className="card-img-top img-fluid " alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet consectetur.</p>
                    
                    <div className="container w-100">
                        {quantity === 0 ? (
                            <button onClick={handleAddToCart} className='btn btn-success w-100' >
                                Rs. {price}/Kg
                            </button>
                        ) : (
                            <div className="d-flex justify-content-between align-items-center">
                                <span>Rs. {quantity*price}</span>
                                <button className='btn btn-danger' onClick={handleDecrement}>-</button>
                                <span>{quantity}</span>
                                <button className='btn btn-success' onClick={handleIncrement}>+</button>
                                {/* <button className='btn btn-success' onClick={resetCount}>Add to Cart</button> */}
                            </div>
                        )}

                    </div>
                    {/* <p className="card-text">Rs. 49</p> */}
                </div>
            </div>
        </div>
    )
}
