import dotenv from "dotenv";
import express, { Application } from "express";
import bootstrap from "./boostrap";
import cors from "cors";

const app: Application = express();

dotenv.config({
  path: `${
    process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env.production"
  }`,
});

// cors
app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);

bootstrap(app);
