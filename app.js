import express from "express";

const app = express();

app.use(express.json());



app.get("/", async (req, res) => {
    res.send("hello from express world :)");
})






app.listen(3000, () => {
    console.log("server is running on port 3000");
})