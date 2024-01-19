require("dotenv").config();
const express=require("express");
const app=express();
//require("./mods/logtofile")

app.use(express.json());

//app.use("/posts",require("./routes/postRoutes"));
app.use("/checklic",require("./chlicRoutes"));
/*
app.use("/checknewpayments",require("./routes/chnewpaymRoutes"));
app.use("/insertrespay",require("./routes/cloudar"));
app.use("/deletepayments",require("./routes/delpay"));
*/

app.use((err,req,res,next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message :"Something went very bad",
        desc:err.name
    });

})

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`))