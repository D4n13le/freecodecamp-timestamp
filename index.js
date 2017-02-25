var server = require('./app/server');

server.listen(process.env.PORT, process.env.IP, function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});