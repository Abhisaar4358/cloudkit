import React from 'react';
// import './App.css'
export default function Carousel() {
  return (
    
    <div className="container my-5">
      <div className="row">
        {/* Left Side - Carousel */}
        <div className="col-md-6">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg"
                  className="img-fluid rounded"
                  alt="..."
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="col-md-6 d-flex flex-column text-success rounded">
  <h2 className="mx-auto fs-2">SIDDHI'S HOMELY FLAVORS</h2>
  <h4 className="mx-auto fs-5">Cooked with Care, served with Love ❤️</h4>
  
  <h3 className="fs-4 mt-3">What we offer :</h3>
    
  <ul className="list-unstyled list-animate">
  <li>✅ 100% pure veg meal</li>
  <li>✅ Freshly prepared home-cooked meals</li>
  <li>✅ Nutritious and balanced meal plan</li>
  <li>✅ High on quality and taste</li>
  <li>✅ Low on oil and spice</li>
</ul>
</div>
      </div>
    </div>
    
  );
}
