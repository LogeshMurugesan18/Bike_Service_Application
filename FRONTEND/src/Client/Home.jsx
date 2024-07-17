import React, { useState, useEffect } from "react";
import axios from "axios";
import './Home.css';
const ServicePage = () => {
  const [services, setServices] = useState([]);

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

  return (
    <div className="card-service">
      {services.map((val, id) => (
        <div className="card" key={id}>
          <img className="card-img" src={val.url} alt={val.serviceName} />
          <h3>{val.serviceName}</h3>
          <h3>{"₹" + val.servicePrice}</h3>
          <a className="book-button">Book now</a>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
