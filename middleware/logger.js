//Add the logger middleware
const logger = (req, res, next) => {
  console.log(req);
  console.log("Hello");
  console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}`);
  next();
};


module.exports = logger;