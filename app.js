import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());



app.get("/", async (req, res) => {
    res.json("hello from express world :)");
})






app.listen(3000, () => {
    console.log("server is running on port 3000");
})