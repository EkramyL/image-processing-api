import express from "express";
import routes from "./routes";
const app = express();

const port: number = 3000;

app.use("/api", routes);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// http://localhost:3000/api/images/?filename=encenadaport&width=600&height=400
