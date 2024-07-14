import React, { useState } from 'react';
import axios from 'axios';

const Dashboard = (props) => {
  const { users, setUsers } = props;

  const [editingUser, setEditingUser] = useState(false);
  const [vehiclenum, setVehiclenum] = useState("");
  const [vehiclemodel, setVehiclemodel] = useState("");
  const [customername, setCustomername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [complaint, setComplaint] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [editId, setEditId] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const deleteUser = async (id) => {
      await axios.delete(`http://localhost:3003/api/${id}`);
      let newUsers = users.filter((ele) => ele._id !== id);
      setUsers(newUsers);
    
  };

  const editUser = (user) => {
    setEditingUser(true);
    setVehiclenum(user.vehiclenum);
    setVehiclemodel(user.vehiclemodel);
    setCustomername(user.customername);
    setMobile(user.mobile);
    setEmail(user.email);
    setDate(user.date);
    setComplaint(user.complaint);
    setStatus(user.status);
    setEditId(user._id);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      vehiclenum,
      vehiclemodel,
      customername,
      mobile,
      email,
      date,
      complaint,
      status
    };
 
      if (!editingUser) {
        const response = await axios.post("http://localhost:3003/api", userData);
        setUsers([...users, response.data]);
      } else {
        await axios.put(`http://localhost:3003/api/${editId}`, userData);
        const updatedUsers = users.map((done) => done._id === editId ? { ...done, ...userData } : done);
        setUsers(updatedUsers);
        setEditingUser(false);
      }
      setVehiclenum("");
      setVehiclemodel("");
      setCustomername("");
      setMobile("");
      setEmail("");
      setDate("");
      setComplaint("");
      setStatus("");
      setEditId("");
  };

  const filteredUsers = statusFilter === "all" ? users : users.filter(user => user.status === statusFilter);

  return (
    <>
      <h1>Customer List</h1>
      <div>
        <label>Filter by Status: </label>
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="Completed">Completed</option>
          <option value="Ready to deliver">Ready to deliver</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <table className='table' border={1}>
        <thead>
          <tr>
            <th>Vehicle Number</th>
            <th>Vehicle Model</th>
            <th>Customer Name</th>
            <th>Mobile Number</th>
            <th>Email id</th>
            <th>Complaint</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers && filteredUsers.map((user, key) => (
            <tr key={key}>
              <td>{user.vehiclenum}</td>
              <td>{user.vehiclemodel}</td>
              <td>{user.customername}</td>
              <td>{user.mobile}</td>
              <td>{user.email}</td>
              <td>{user.complaint}</td>
              <td>{user.date}</td>
              <td>{user.status}</td>
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
                <button onClick={() => editUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>{editingUser ? 'Edit Details' : 'Add Details'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={vehiclenum} onChange={(e) => setVehiclenum(e.target.value)} placeholder='Eg:TN 00 AA 0000' /><br />
        <input type="text" value={vehiclemodel} onChange={(e) => setVehiclemodel(e.target.value)} placeholder='Eg:Yamaha R15' /><br />
        <input type="text" value={customername} onChange={(e) => setCustomername(e.target.value)} placeholder='Customer Name' /><br />
        <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='Mobile no' /><br />
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Id' /><br />
        <input type="text" value={complaint} onChange={(e) => setComplaint(e.target.value)} placeholder='Complaint' /><br />
        <input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder='Date' /><br />
        <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Status' /><br />
        <button type='submit'>{editingUser ? 'Update Data' : 'Add Data'}</button>
      </form>
    </>
  );
};

export default Dashboard;
