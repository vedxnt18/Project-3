const mongoose = require("mongoose");
const initData =  require("./data.js"); //init data imported from other file
const Listing = require("../models/listing.js");    //Listing is required
const path = require("path");   //path s required

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust"; //url required to connect to DB

main()  //Function to check DB working 
    .then(()=>{
        console.log("connected to DB")
    }).catch((err)=>{
        console.log(err)
    })

async function main() { //create function main() to connect DB with mongooose
    mongoose.connect(MONGO_URL);
}

const initDB = async () =>{

    // console.log("Initializing DB with data:", initData.data); // Debugging

    await Listing.deleteMany({});   //first all db is cleared
    await Listing.insertMany(initData.data);    //data is been inserted
    console.log("Data was initialized");    
}

initDB();   //function is called