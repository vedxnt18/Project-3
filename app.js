const express = require("express"); //express required
const app =express();   //app 
const mongoose = require("mongoose");   //mongoose required
const Listing = require("./models/listing.js")  //Listing requied from listing.js file
const path = require("path");   //paths required
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");    //ejs-mate is package downloaded and required (npm i ejs-mate) used to style ejs files

app.set("view engine","ejs");  
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true }));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate)
app.use(express.static(path.join(__dirname,"/public")));

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

// app.get("/testListing",async (req,res)=>{   //route created to test the listings 
//     let sampleListing = new Listing({       //sample data is sent to DB by pouring in variable named sampleListing
//         title:"Villa La Vida",  //data is given without image
//         description:"Very beautiful",
//         price:20000,
//         location:"pune",
//         country:"india",
//     });

//     await sampleListing.save(); //saved to DB command & has been awaited
//     console.log("sample was saved");
//     res.send("sample working");
// })

//INDEX ROUTE
app.get("/listings",async (req,res)=>{
    const allListings = await Listing.find({}); //helps list out every entry from database
    res.render("./listings/index.ejs",{ allListings });
})

//NEW ROUTE
app.get("/listings/new", (req,res) => {    
    res.render("./listings/new.ejs")    //renders new.ejs file for getting data or listing
})

//SHOW ROUTE
app.get("/listings/:id",async(req,res)=>{
    let { id } = req.params;
    const listing = await Listing.findById(id); //specific id information is gathered and sent into listing variable
    res.render("./listings/show.ejs",{ listing });  //that info is sent to show.ejs file
})

//CREATE ROUTE
app.post("/listings", async (req,res)=>{
    // let { title,description,image,price,location,country } = req.body;  //This can also be used but it is too long so in new.ejs we used something else like listing[]
    let listing = req.body.listing; //updated info caught into listing variable
    // console.log(listing);
    const newListing = new Listing(listing); //put the new info into Listing schema then put all that value into newListing
    await newListing.save();    //saved to DB successfully
    
    res.redirect("/listings")
})

//EDIT ROUTE
app.get("/listings/:id/edit",async (req,res)=>{
    let {id} = req.params;  //id required
    const listing = await Listing.findById(id); //id of the villa that to be edited is extracted and filled in listing
    res.render("./listings/edit.ejs",{ listing })   //rendered and listing is sent to ejs file
})

//UPDATE ROUTE
 app.put("/listings/:id",async (req,res)=>{ //PUT req used in here using method override
    let { id } =req.params;     //id required
    await Listing.findByIdAndUpdate(id, {...req.body.listing}); //finds the villa by id and then update it and we have sent parameters by deconstructing the req body data from ejs file

    res.redirect("/listings");
 })

//DELETE ROUTE
app.delete("/listings/:id",async (req,res)=>{
    let { id } =req.params; 
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
})

//ROOT ROUTE
app.get("/",(req,res)=>{    //root route created
    res.send("Hi im root")
})

app.listen(8080,()=>{   //app listening on port 8080
    console.log("server listening at 8080");
})