const jwt = require("jsonwebtoken");
const env = require("../.env");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    next();
  } else {
    const token =
      req.body.token || req.query.token || req.headers["authorization"];

    if (!token) {
      return res.status(403).send({ errros: ["No token provided."] });
    }

    jwt.verify(token, env.authScret, (err, decoded) => {
      if (err) {
        return res
          .status(403)
          .send({ erros: ["Failed to authenticate token"], err });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  }
};
