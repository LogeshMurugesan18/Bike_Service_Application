import React, { useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
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
  const [amount,setAmount] = useState("");
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
    setAmount(user.amount);
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
      status,
      amount
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
      setAmount("");
      setEditId("");
  };

  const filteredUsers = statusFilter === "all" ? users : users.filter(user => user.status === statusFilter);

  return (
    <>
      <h1 id='title'>Customer List</h1>
      <div className='filterbar'>
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
            <th>&#8377;Amount</th>
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
              <td>{user.amount}</td>
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
                <button onClick={() => editUser(user)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1 className='formhead'>{editingUser ? 'Edit Details' : 'Add Details'}</h1>
      <form onSubmit={handleSubmit}>
        <h4>Vehicle Number</h4><input type="text" value={vehiclenum} onChange={(e) => setVehiclenum(e.target.value)} placeholder='Eg:TN 00 AA 0000' /><br />
        <h4>Vehicle Model</h4><input type="text" value={vehiclemodel} onChange={(e) => setVehiclemodel(e.target.value)} placeholder='Eg:Yamaha R15' /><br />
        <h4>Customer Name</h4><input type="text" value={customername} onChange={(e) => setCustomername(e.target.value)} placeholder='Name in Caps' /><br />
        <h4>Mobile Number</h4><input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder='xxxxxxxxxx' /><br />
        <h4>Email Id</h4><input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Eg:abc@gmail.com' /><br />
        <h4>Complaint</h4><input type="text" value={complaint} onChange={(e) => setComplaint(e.target.value)} placeholder='Eg:General Service' /><br />
        <h4>Date</h4><input type="text" value={date} onChange={(e) => setDate(e.target.value)} placeholder='DD/MM/YYYY' /><br />
        <h4>Status</h4><input type="text" value={status} onChange={(e) => setStatus(e.target.value)} placeholder='Current Status' /><br />
        <h4>Amount</h4><input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Amount in Rupees' /><br />
        <button type='submit'>{editingUser ? 'Update Data' : 'Add Data'}</button>
      </form>
    </>
  );
};

export default Dashboard;
