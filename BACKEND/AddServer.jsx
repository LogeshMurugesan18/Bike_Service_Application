var express=require('express')
var app=express();
var cors=require('cors');
app.use(cors());
const mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/curd').then(()=>{
  console.log("Connected to mongo db");
})
const expenseSchema =  new mongoose.Schema({
  date:{type: String, required:true},
  categeory:{type: String, required:true},
  amount:{type: Number, required:true},
});
let Expenses =mongoose.model("Expenses",expenseSchema)
app.use(express.json());

app.get('/data', async function(req,res){
  const expense=await Expenses.find();
  res.json(expense);
  
});
app.post('/api',(req,res)=>{
  const {categeory,amount}=req.body;
  const newItem=new Expenses({date:new Date().toLocaleDateString(),categeory,amount});
  newItem.save();
  res.status(200).json(newItem);
})

app.put("/api/:id",async(req,res)=>{
  let _id=req.params.id;
  const itemToUpdate =await Expenses.findByIdAndUpdate(_id,req.body);
  if(!itemToUpdate) return res.status(404).send("No item found with the id");
  res.status(200).send("Content modified");
})


app.delete("/api/:id",async(req,res)=>{
  let _id=req.params.id;
  const itemToDelete=await Expenses.findByIdAndDelete(_id,req.body);
  if(!itemToDelete) return res.status(404).send("No data to delete in this id");
  res.status(200).send("Content Deleted");
})
app.listen(4000,()=>{
  console.log('server is running on port 4000');
})