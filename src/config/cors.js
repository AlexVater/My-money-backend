module.exports = (req, res, next) => {
  res.setHeader("Acces-Control-Allow-Origin", "http://localhost:3000/");
  res.setHeader("Acces-Control-Allow-Origin", "*");
  res.setHeader(
    "Acces-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-WIth, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
