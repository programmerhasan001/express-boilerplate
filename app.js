const express = require("express")
const app = express()
const productRoutes = require("./src/routes/productRoutes")

app.use("/api", productRoutes)
module.exports = app;
