import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import productRoute from "./routes/products.js";
import userRoute from "./routes/users.js";
import orderRoute from "./routes/orders.js";
import categoryRoute from "./routes/categories.js";

const app = express();

dotenv.config();
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use("/api/v1/products", productRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/orders", orderRoute);
app.use("/api/v1/categories", categoryRoute);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
}).then(() => console.log("Database Connecton Success")).catch((err) => console.log(err));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`)
})