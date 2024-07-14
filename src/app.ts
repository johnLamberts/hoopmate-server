import dotenv from "dotenv";
import express, { Application } from "express";
import bootstrap from "./boostrap";

const app: Application = express();

dotenv.config({
  path: `${
    process.env.NODE_ENV === "development"
      ? ".env.development"
      : ".env.production"
  }`,
});

bootstrap(app);
