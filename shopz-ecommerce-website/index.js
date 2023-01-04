const WELCOME = function () {
          
    console.log('Welcome to RESTAPI E-Commerce');
}
WELCOME();
const hostname = "localhost";
const express = require("express"); //assume express as a function for which we have to create some instances like we use app in it;
const app = express(); //, the returned value of that function is an instance of Express
const mongoose = require("mongoose");
const dotenv = require("dotenv");  // use to make links and values private to everyone
const userroute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe"); //for payment 
const cors = require("cors"); //Cross Origin Resource Sharing connection between third parties resources sharing;one can get access to the resources of this site;
dotenv.config();   //It gives us multiple files.json and parameters for easy deployemnet of environmental variables
mongoose.connect(
    process.env.MONGO_URL).then(() => console.log("db successful")).catch((err) => {
    console.log("getting error");  //used for connecting the mondodb atlas;  process.env.MONGO_url .env is configure to process .env and then it fetches the mongourl 
});
app.use("/api/users",userroute);
app.use("/api/auth",authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!"); //to run a local server
});
app.get("/" , (req,res) => {
    res.send("url_sucessful  " + "  Enter api urls");
    
});
app.get("/about" , (req,res) => {
    res.send("This is a RESTAPI for an ecommerce website u may have various options   1./api/users 2.  /api/auth 3. /api/products 4. /api/carts 5. /api/order 6. /api/checkout ");
    
});

app.listen(process.env.PORT || 5000 , hostname, () => { 

    console.log("backend is running");
})