import express from "express";
import routes from "./routes";
import path from "path";
const app = express();

const port = 3000;
app.use("/images", express.static(path.resolve(__dirname, `../images`)));
app.use(
  "/imagesThumb",
  express.static(path.resolve(__dirname, `../imagesThumb`))
);
app.use("/api", routes);

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});

// http://localhost:3000/api/images/?filename=encenadaport&width=600&height=400

export default app;
