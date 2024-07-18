// var express=require('express')
// var app=express();
// var cors=require('cors');
// app.use(cors());
// const mongoose=require("mongoose");
// mongoose.connect('mongodb://localhost:27017/Bike-Service-Spplication').then(()=>{
//   console.log("Connected to mongo db");
// })
// const CustomerSchema =  new mongoose.Schema({
//   vehiclenum:{type:String,required:true},
//   vehiclemodel:{type: String, required:true},
//   customername:{type:String,required:true},
//   mobile:{type: String, required:true},
//   email:{type:String,required:true},
//   complaint:{type: String, required:true},
//   date:{type: String, required:true},
//   status:{type: String, required:true},
//   amount:{type:String,required:true},
// });
// let Customers =mongoose.model("Customers",CustomerSchema)
// app.use(express.json());

// app.get('/data', async function(req,res){

//   const cust=await Customers.find();
//   res.json(cust);
  
// });
// app.post('/api',(req,res)=>{
//    const {vehiclenum,vehiclemodel,customername,mobile,email,complaint,date,status,amount}=req.body;
//   const newcust=new Customers({vehiclenum,vehiclemodel,customername,mobile,email,complaint,date,status,amount});
//   newcust.save();
//   res.status(200).json(newcust);
// })

// app.put("/api/:id",async(req,res)=>{
//   let _id=req.params.id;
//   const custToUpdate =await Customers.findByIdAndUpdate(_id,req.body);
//   if(!custToUpdate) return res.status(404).send("No customer found with the id");
//   res.status(200).send("Content modified");
// })


// app.delete("/api/:id",async(req,res)=>{
//   let _id=req.params.id;
//   const custToDelete=await Customers.findByIdAndDelete(_id,req.body);
//   if(!custToDelete) return res.status(404).send("No data to delete in this id");
//   res.status(200).send("Content Deleted");
// })

// app.listen(3003,()=>{
//   console.log('server is running on port 3003');
// })


var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Bike-Service-Spplication').then(() => {
  console.log("Connected to MongoDB");
});

const CustomerSchema = new mongoose.Schema({
  vehiclenum: { type: String, required: true },
  vehiclemodel: { type: String, required: true },
  customername: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  complaint: { type: String, required: true },
  date: { type: String, required: true },
  status: { type: String, required: true },
  amount: { type: String, required: true },
});

const ServiceSchema = new mongoose.Schema({
  url: { type: String, required: true },
  serviceName: { type: String, required: true },
  servicePrice: { type: String, required: true },
});

let Customers = mongoose.model("Customers", CustomerSchema);
let Service = mongoose.model("Service", ServiceSchema);

app.use(express.json());

app.get('/data', async function (req, res) {
  const cust = await Customers.find();
  res.json(cust);
});

app.post('/api', (req, res) => {
  const { vehiclenum, vehiclemodel, customername, mobile, email, complaint, date, status, amount } = req.body;
  const newcust = new Customers({ vehiclenum, vehiclemodel, customername, mobile, email, complaint, date, status, amount });
  newcust.save();
  res.status(200).json(newcust);
});

app.put("/api/:id", async (req, res) => {
  let _id = req.params.id;
  const custToUpdate = await Customers.findByIdAndUpdate(_id, req.body);
  if (!custToUpdate) return res.status(404).send("No customer found with the id");
  res.status(200).send("Content modified");
});

app.delete("/api/:id", async (req, res) => {
  let _id = req.params.id;
  const custToDelete = await Customers.findByIdAndDelete(_id, req.body);
  if (!custToDelete) return res.status(404).send("No data to delete in this id");
  res.status(200).send("Content Deleted");
});

app.get('/anotherdata', async function (req, res) {
  const ServiceData = await Service.find();
  res.json(ServiceData);
});

app.post('/anotherapi', (req, res) => {
  const { url, serviceName, servicePrice } = req.body;
  const newEntry = new Service({ url, serviceName, servicePrice });
  newEntry.save();
  res.status(200).json(newEntry);
});

app.put("/anotherapi/:id", async (req, res) => {
  let _id = req.params.id;
  const entryToUpdate = await Service.findByIdAndUpdate(_id, req.body);
  if (!entryToUpdate) return res.status(404).send("No entry found with the id");
  res.status(200).send("Content modified");
});

app.delete("/anotherapi/:id", async (req, res) => {
  let _id = req.params.id;
  const entryToDelete = await Service.findByIdAndDelete(_id, req.body);
  if (!entryToDelete) return res.status(404).send("No data to delete in this id");
  res.status(200).send("Content Deleted");
});

app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
