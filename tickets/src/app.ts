import cookieSession from "cookie-session";
import express from "express";
import bodyParser from "body-parser";
import { createTicketRouter } from "./routes/new";

import {
  NotFoundError,
  errorHandler,
  currentUser
} from "@shahzaibshaikh-ticketing/common";

const app = express();
app.set("trust proxy", true);
app.use(bodyParser.json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test"
  })
);

app.use(currentUser);

app.use(createTicketRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
