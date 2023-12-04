import express from "express";
import bodyParser from "body-parser";
import { currentUserRouter } from "./routes/current-user";

const app = express();
app.use(bodyParser.json());

app.use(currentUserRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
