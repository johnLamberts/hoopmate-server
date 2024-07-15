import dotenv from "dotenv";
import express, { Application } from "express";
import bootstrap from "./boostrap";
import cors from "cors";
import cookieParser from "cookie-parser";
import colors from "colors.ts";

colors?.enable();

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

// cookie parser
app.use(cookieParser());

// response returns json format
app.use(express.json());

bootstrap(app);
