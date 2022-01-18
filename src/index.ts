import express from "express";
import routes from "./routes";
const app = express();

const port: number = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
