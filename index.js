const express=require("express");
const cors=require("cors")
const dotenv=require("dotenv");
const { routes } = require("./Routes/PotfolioRoutes");
const path=require("path")

// configuring dotenv variable
dotenv.config()

// rest object
const app=express();


// middlewares
app.use(cors());
app.use(express.json())
app.use(express.static("./Mern_Portfolio/dist"))

// routes
app.use("/api/v1/portfolio",routes)
app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"./Mern_Portfolio/dist/index.html"))
})

// listening the server
const PORT=process.env.PORT || 8090
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})