import * as http from 'http'
const PORT = 5000
const server = http.createServer((request, response) => {
    response.end("Hola, buenas dias!")
})

server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})