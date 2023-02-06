const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require("http");
server = http.createServer((req,res) => {
    let method = req.method;
    let url = req.url;
    let reqBody ='';
    req.on('data', (data) => reqBody += data)
    req.on('end', () => {
    });
    req.
    res.end();
});
const port = 5000;
server.listen(port, console.log('Server is listening on port', port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };