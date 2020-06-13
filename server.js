const http = require('http') // établit une communication
const app = require('./app')

const server = http.createServer(app)

server.listen(3000)