import React from 'react';
import './LandingPage.css';
const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Piston Doc</h1>
      
      <div className="about-section">
      <img src="https://th.bing.com/th/id/OIP.gK-Us9gxqsIyWROK3xwdnwHaE8?rs=1&pid=ImgDetMain" alt="Our Work" className="about-image" />
        <div className="about-text">
          <h2>Our History</h2>
          <p>
            Piston Doc was established in 2010 with the vision of providing top-notch vehicle repair and maintenance services. Over the years, we have grown into a trusted name in the industry, known for our commitment to quality and customer satisfaction.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>Our Work</h2>
          <p>
            At Piston Doc, we offer a wide range of services, including general repairs, scheduled maintenance, and specialized diagnostics. Our team of experienced technicians uses the latest tools and technology to ensure your vehicle is in perfect condition.
          </p>
        </div>
        <img src="https://deshibiker.com/wp-content/uploads/2020/11/mechanics-500x334.jpg" alt="Our History" className="about-image" />
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>Cost Effective</h2>
          <p>
            At Piston Doc, we understand the importance of affordability. We offer competitive pricing without compromising on the quality of our services. Our transparent pricing ensures there are no hidden costs, giving you peace of mind.
          </p>
        </div>
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Experienced and certified technicians.</li>
            <li>State-of-the-art diagnostic tools.</li>
            <li>Comprehensive range of services.</li>
            <li>Friendly and professional customer service.</li>
            <li>Convenient scheduling options.</li>
          </ul>
        </div>
        <img src="https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Why Choose Us" className="about-image" />
      </div>

      <div className="about-section">
        <div className="about-text">
          <h2>Advantages of Choosing Piston Doc</h2>
          <p>
            By choosing Piston Doc, you benefit from our years of experience, commitment to excellence, and customer-centric approach. We ensure your vehicle receives the best care, helping you maintain its longevity and performance.
          </p>
          <ul>
            <li>Quick turnaround times.</li>
            <li>High-quality parts and materials.</li>
            <li>Guaranteed satisfaction.</li>
            <li>Expert advice and tips.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
