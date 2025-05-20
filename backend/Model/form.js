import mongoose from "mongoose";

 const formStructure = mongoose.Schema(
    {
        first_name : String,
        last_name : String,
        password : String,
        phone : Number,
        custom : String
    }
 )
  const formModel = mongoose.model('MyData' , formStructure);
  export default formModel;