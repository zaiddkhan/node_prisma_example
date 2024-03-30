import express from "express";
import "dotenv/config";
import ApiRoutes from './routes/api.js'
import fileUpload from "express-fileupload";


const app = express();
app.use(express.static("public"));
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(fileUpload())
app.use('/api',ApiRoutes)

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