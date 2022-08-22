const express = require('express');
const bodyparser = require('body-parser');
var app = express();
const cors = require("cors");
// const logger = require("morgan");

app.use(cors());
const PORT = process.env.PORT || 3000;
// app.use(bodyparser.json());

//routes
const userRoutes = require ("./routes/routes.user")
const productRoutes = require ("./routes/routes.products")
const commandeRoutes= require("./routes/router.commandes")
app.use(bodyparser.json());
app.use("/api/user", userRoutes);
app.use('/api/products',productRoutes)
app.use('/api/commandes',commandeRoutes)
// app.use(logger("dev"));





app.get("/",(req,res) => {
    res.send("hello world")
})


app.listen(PORT, function (){
    console.log(`listening on http://localhost:${PORT}`);
});