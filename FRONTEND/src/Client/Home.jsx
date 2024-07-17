// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './Home.css';
// const ServicePage = () => {
//   const [services, setServices] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3003/anotherdata");
//         setServices(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="card-service">
//       {services.map((val, id) => (
//         <div className="card" key={id}>
//           <img className="card-img" src={val.url} alt={val.serviceName} />
//           <h3>{val.serviceName}</h3>
//           <h3>{"₹" + val.servicePrice}</h3>
//           <a className="book-button">Book now</a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ServicePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

const ServicePage = ({ loggedInUser }) => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3003/anotherdata");
        setServices(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleBookNow = async (service) => {
    const servicePackage = {
      packageName: service.serviceName,
      packagePrice: service.servicePrice,
      packageUrl: service.url,
    };

    try {
      const response = await axios.post("http://localhost:3003/updateCustomerWithService", {
        email: loggedInUser.email,
        mobile: loggedInUser.mobile,
        servicePackage,
      });
      console.log("Service package added to customer:", response.data);
    } catch (error) {
      console.error("Error updating customer with service:", error.response.data);
    }
  };

  return (
    <div className='card-service'>
      {services?.map((service, id) => (
        <div className='card' key={id}>
          <img className='card-img' src={service.url} alt={service.serviceName} />
          <h3>{service.serviceName}</h3>
          <h3>{"₹" + service.servicePrice}</h3>
          <button onClick={() => handleBookNow(service)}>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
