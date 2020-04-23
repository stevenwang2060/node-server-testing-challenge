require("dotenv").config();
const server = require("./api/server.js");

const port = process.env.PORT || 8000;

server.listen(port, () =>{
    console.log(`\n** server listening on port: ${port} **\n`)
})