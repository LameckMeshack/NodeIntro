import express from "express";
import bodyParser from "body-parser";
import internRoutes from "./internRoutes.js";

const port = process.env.PORT || 3000;
const hostname = "127.0.0.1";
//localhost:3000/
const app = express();
app.use(bodyParser.json());

app.use("/interns", internRoutes);

app.listen(port, hostname, () => {
  console.log(`Your Server is running at http://${hostname}:${port}/`);
});
