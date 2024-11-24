import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"
import cors from "cors";


dotenv.config();

const port =process.env.PORT || 3000;
const app = express()
const URI=process.env.MongoDBURI;
app.use(cors({
    origin: 'https://book-nexus-frontend.vercel.app',  // Corrected the trailing slash issu
}));
app.options('*', cors());  // Allow all methods for preflight requests
app.use(express.json());

//connect to moongoDB
try {
   mongoose
  .connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
} catch (error) {
    console.log("Error",error);
}
//defining routes
app.get("/",()=>{
    res.send("Deployed successfully")
});
app.use("/book",bookRoute)
app.use("/user",userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
