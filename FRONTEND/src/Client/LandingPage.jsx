
import React from 'react';
import '../Client/LandingPage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="carousel-container">
          <Carousel autoPlay infiniteLoop showThumbs={false}>
            <div>
              <img src="https://images.pexels.com/photos/5252118/pexels-photo-5252118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
              <p className="legend">General Service</p>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/3822843/pexels-photo-3822843.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Slide 2" />
              <p className="legend">Engine Works</p>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4513028/pexels-photo-4513028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 3" />
              <p className="legend">Water Wash</p>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/4116193/pexels-photo-4116193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 4" />
              <p className="legend">Electronic Works</p>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/10030505/pexels-photo-10030505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 5" />
              <p className="legend">Modifications</p>
            </div>
          </Carousel>
        </div>
        <div className="landingpara">
          <h1>Why Us?</h1>
          <p>
            At Piston Doc, we get it your bike is more than just a way to get around. 
            It's your daily companion, your adventure partner, and a reflection of who you are. 
            That's why we take pride in offering top-notch bike service that keeps you moving smoothly and safely.
            Our team of skilled and certified mechanics treats every bike with the care and expertise it deserves,
            using the latest tools and techniques to fix any issues. Whether you need a quick tune-up, a 
            thorough maintenance check, or a tricky repair, we've got you covered. We believe in clear pricing, 
            friendly service, and making things easy for you with flexible scheduling options. Choose Piston Doc, 
            and ride with peace of mind knowing your bike is in great hands.
          </p>
          <Link to='/login'><button className="book-now">Book Now</button></Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
