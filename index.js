import express from "express";
import "dotenv/config";
const app = express();
const port = process.env.PORT || 8000
app.get("/",(req,res) => {
    return res.json(
        {
            msg : "working"
        }
    )
});

app.listen(port,() => {
    console.log(`Application listening on port ${port}`)
});