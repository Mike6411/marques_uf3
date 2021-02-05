#!/usr/bin/node

const http = require("http");

console.log("Inicializando el servidor web");

http.createServer((request, response) => {

	response.writeHead(200, {'Content-Type' : 'text/plain'});

	response.write("ola k ase");

	response.end();

}).listen(8080);
