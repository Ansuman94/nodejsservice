const express = require("express");
const bodyparser = require("body-parser");
async function runServer() {
  await require("./db").connect();
  server.use(bodyparser.json());
  // server.get("/test", (req, res) => {
  //   return res.json({ message: "test is working!" });
  // });

  // server.get("/api/portfolios", (req, res) => {
  //   return res.json({ data: "portfolio test" });
  // });

  server.use("/api/portfolios", portfoliosRoutes);

  const PORT = parseInt(process.env.PORT, 10) || 3001;
  server.listen(PORT, err => {
    if (err) console.error(err);
    console.log("Server ready on port:", PORT);
  });
}
runServer();
const server = express();
const portfoliosRoutes = require("./Routes/portfolio");
