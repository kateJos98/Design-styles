const soap = require('soap');
const http = require('http');
const fs = require('fs');

const service = {
  Hello_Service: {
    Hello_Port: {
      sayHello: function(args) {
        return { greeting: `Hello ${args.name}` };
      },
    },
  },
};

const xml = fs.readFileSync('service.wsdl', 'utf8');

const server = http.createServer(() => {});
server.listen(3001, () => {
  soap.listen(server, '/wsdl', service, xml);
  console.log('Hello from soap-api ');
});
