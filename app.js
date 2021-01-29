const logger = require("./middleware/logger");
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger);

app.use(require("./routes/api.js"));
const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))