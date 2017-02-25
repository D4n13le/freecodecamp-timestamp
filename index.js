var server = require('./app/server');

server.listen(process.env.PORT || 8080, process.env.IP || 'localhost', function () {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});