const express = require("express");
const router = require("./routes/index");
const memberRouter = require("./routes/member");
const path = require("path");
var morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Added the router middleware
app.use("/", router);
app.use("/api/members", memberRouter);
app.use(morgan("combined"));



//set a static folder
app.use(express.static(path.join(__dirname, "public")));

require("dotenv").config();

const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Application running at port ${PORT}`);
});
