const express = require("express")
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
var cors = require('cors');
app.use(cors())

mongoose.set("strictQuery", false);
main().catch(err => console.log(err));

async function main() {
//   await mongoose.connect('mongodb+srv://simran:%40Diksha0149@cluster0.t8k85zq.mongodb.net/?retryWrites=true&w=majority');
await mongoose.connect('mongodb://127.0.0.1:27017/test');
  console.log('db connected');
}

// const port= process.env.PORT || 5000;
const port=5000;
app.listen(port,()=>{
    console.log(`Server is running ${port}`);
})
app.use("/api",require("./routes/simranroutes"))

// const URL = process.env.MONGODB_URL;
// mongoose.connect(URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }).then(()=>{
//     console.log('mongodbbbbb connected')
//     app.listen(port,()=>{
//         console.log(`Server is running ${port}`);
//     })
// }).catch(err=>{
//     console.log(err)
// })