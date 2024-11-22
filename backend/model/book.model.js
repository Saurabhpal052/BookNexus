import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    price:Number,
    Image:String,
    title:String
})

//MongoDB automatically made a database with name of bookStore and a collection with name "books"(mongoDb automatically add 's' in Book);
const Book=mongoose.model("Book",bookSchema)

export default Book;