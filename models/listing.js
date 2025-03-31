const mongoose = require("mongoose");   //mongoose required
const Schema = mongoose.Schema; //mongoose.Schema command is set into Schema variable so that we dont have to type it that long


const listingSchema = new Schema({  //new schema created for listings
    title:{
        type:String,
        required:true,  //it is compulsory
    },
    description:String,
    image:{
        type:String,
        default:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fms-paint-drawing-art--690106342901777263%2F&psig=AOvVaw0XLPa2U5kBTAwpZ611j5Yz&ust=1740218129317000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCI0u6_1IsDFQAAAAAdAAAAABAE",
        //a default value to image is given in the form of link if client does not give the image then this default img is used
        set: (v)=> v===""? 
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fms-paint-drawing-art--690106342901777263%2F&psig=AOvVaw0XLPa2U5kBTAwpZ611j5Yz&ust=1740218129317000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCI0u6_1IsDFQAAAAAdAAAAABAE"
        : v,
        //set is used with ternary operated like value of link of img given by client is set into variable v , if value of v equals blank space
        // then the link provided will work and if client genuienly gives img link then it is stored in v and it is displayed
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);    //listing collectionn is created in DB 

module.exports = Listing;   //  Listing is exported 