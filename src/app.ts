import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({ message: "This Is My Get Request" });
});
export default app;
