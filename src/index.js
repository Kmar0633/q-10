import routes from "./routes/index.js";
import express from "express";


const app = express();
const PORT = 3000;
app.get("/q10", async (req, res) => {
    res.send({
      status: "success",
      message: "Express OK",
    });
  });
app.use("/q10/v1", routes.v1);

app.listen(PORT, (error) =>{
  console.log(`Server started on localhost:${PORT}`)
}
);