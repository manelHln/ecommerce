// const cors = (req, res, next) =>{
//     res.header("Access-Control-Allow-Origin", "http://localhost:3000");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
//     next()
// }

// module.exports = cors

const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Allow-Credentials", "true");
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    return res.status(200).json({});
  }
  next();
};

module.exports = cors;
