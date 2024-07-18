import React, { useState } from "react";
import axios from "axios";

const AddService = () => {
  const [url, setUrl] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3003/anotherapi", {
        url,
        serviceName,
        servicePrice
      });
      console.log("Service added successfully", res.data);
      setUrl("");
      setServiceName("");
      setServicePrice("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-new">
        <h2>Adding New Service</h2>
        <input
          className="add-input"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Paste the URL of the image here..."
        />
        <input
          className="add-input"
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          placeholder="Enter the service name here..."
        />
        <input
          className="add-input"
          type="text"
          value={servicePrice}
          onChange={(e) => setServicePrice(e.target.value)}
          placeholder="Enter the service price here..."
        />
        <button className="add-input-btn" type="submit">
          Add Service
        </button>
      </form>
    </div>
  );
};

export default AddService;




