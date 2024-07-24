var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Bike-Service-Application', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
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

const SignupDetailsSchema = new mongoose.Schema({
  vehiclenum: { type: String, required: true },
  vehiclemodel: { type: String, required: true },
  customername: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true },
});

let Customers = mongoose.model("Customers", CustomerSchema);
let Service = mongoose.model("Service", ServiceSchema);
let SignupDetails = mongoose.model("SignupDetails", SignupDetailsSchema);

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
  newEntry.save()
    .then(() => res.status(200).json(newEntry))
    .catch(err => res.status(500).json({ error: err.message }));
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




app.post('/signup', async (req, res) => {
  try {
    const { vehiclenum, vehiclemodel, customername, mobile, email, status } = req.body;
    const newSignup = new SignupDetails({ vehiclenum, vehiclemodel, customername, mobile, email, status });
    await newSignup.save();
    res.status(201).json(newSignup);
  } catch (error) {
    res.status(400).json({ message: "Signup failed", error });
  }
});


app.post('/login', async (req, res) => {
  try {
    const { email, mobile } = req.body;
    const user = await SignupDetails.findOne({ email, mobile });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(400).json({ message: "Invalid email or mobile number" });
    }
  } catch (error) {
    res.status(400).json({ message: "Login failed", error });
  }
});


app.post('/bookservice', async (req, res) => {
  try {
    const { email, mobile, serviceId } = req.body;
    console.log(serviceId);
    

    const newCustomerDetails = {
      vehiclenum: "TN01AA11111",
      vehiclemodel: "MAX1100",
      customername: "Bro Asp",
      mobile: email,
      email: "cdg@gmail.com",
      status: "Booked",
      amount: 8000,
      complaint: "Tyre Change", 
      date: "01/03/2024"
    };

    const customer =new Customers(newCustomerDetails);
    await  customer.save();
  

    res.status(200).json(customer);
  } catch (error) {
    res.status(400).json({ message: "Service booking failed", error });
  }
});


app.listen(3003, () => {
  console.log('Server is running on port 3003');
});
