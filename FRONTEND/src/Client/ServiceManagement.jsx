import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [packageName, setPackageName] = useState('');
  const [packagePrice, setPackagePrice] = useState('');
  const [packageUrl, setPackageUrl] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      const response = await axios.get('http://localhost:3003/services');
      setServices(response.data);
    };
    fetchServices();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await axios.put(`http://localhost:3003/services/${editId}`, { packageName, packagePrice, packageUrl });
      setEditId(null);
    } else {
      await axios.post('http://localhost:3003/addService', { packageName, packagePrice, packageUrl });
    }
    setPackageName('');
    setPackagePrice('');
    setPackageUrl('');
    // Refresh the service list
    const response = await axios.get('http://localhost:3003/services');
    setServices(response.data);
  };

  const handleEdit = (service) => {
    setEditId(service._id);
    setPackageName(service.packageName);
    setPackagePrice(service.packagePrice);
    setPackageUrl(service.packageUrl);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3003/services/${id}`);
    const newServices = services.filter(service => service._id !== id);
    setServices(newServices);
  };

  return (
    <div>
      <h1>Service Management</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={packageName} onChange={(e) => setPackageName(e.target.value)} placeholder='Package Name' required />
        <input type="text" value={packagePrice} onChange={(e) => setPackagePrice(e.target.value)} placeholder='Package Price' required />
        <input type="text" value={packageUrl} onChange={(e) => setPackageUrl(e.target.value)} placeholder='Image URL' required />
        <button type="submit">{editId ? 'Update Service' : 'Add Service'}</button>
      </form>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            {service.packageName} - {service.packagePrice}
            <button onClick={() => handleEdit(service)}>Edit</button>
            <button onClick={() => handleDelete(service._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceManagement;
