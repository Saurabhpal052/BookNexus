import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
const cors = require('cors');


dotenv.config();

const port =process.env.PORT || 3000;
const app = express()
const URI=process.env.MongoDBURI;
app.use(cors(
    {
       origin: 'book-nexus-frontend.vercel.app',
    }
));
app.use(express.json());

//connect to moongoDB
try {
    mongoose.connect(URI,{
      useNewUrlParser:true,
      useUnifiedTopology:true, 
    });
    console.log("Connected to mongoDB dont")
} catch (error) {
    console.log("Error",error);
}
//defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
