const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require("http");
server = http.createServer((req,res) => {
    console.log(req);
    let method='';
    console.log(url);
    let reqBody ='';
    req.on('method', (meth) => method = meth);
    //req.on('url', (ur) => url = ur);
    req.on('data', (dat) => reqBody += dat)
    req.on('end', () => {
        console.log('method = ', method);
        console.log('URL = ', url);
        console.log('data all = ', reqBody);
    });
    res.end();
});
const port = 5000;
server.listen(port, console.log('Server is listening on port', port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };