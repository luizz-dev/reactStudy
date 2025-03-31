const http = require("http");

const users = require("./mocks/user");

const server = http.createServer((request, response) => {
  console.log(`resquest method: ${request.method} | Endponint: ${request.url}`);

  if (request.url === "q/users" && request.method === "GET") {
    response.writeHead(200, { "content-Type": "applicantion/json" });
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(404, { "content-Type": "text/html" });
    response.end("nao achou");
  }
});

server.listen(3000, () => console.log("servidor http://localhost:3000"));
