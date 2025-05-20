import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import formModel from "./Model/form.js";

const app = express();

const url =
  "mongodb+srv://mbasit467:cELuhEyPrsOyCrIJ@cluster0.fw2npzm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose.connect(url, console.log("connected to database"));

app.use(express.json());
app.use(cors())

app.post("/", async (req, res) => {
    console.log(req.body.first_name);
  const newForm = formModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
    phone: req.body.phone,
    custom: req.body.custom,
  });
  try {
    await newForm.save();
  } catch (error) {
    console.log(error);
  }
});
app.get("/", async (req, res) => {
    try {
      const result = await formModel.find();
      res.send(result);
    } catch (error) {
      console.log(error);
    }
  });
  

  const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });