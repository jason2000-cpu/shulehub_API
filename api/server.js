// const jsonServer = require('json-server')
// const cors = require('cors')
// const path = require('path')

// const server = jsonServer.create()
// const router = jsonServer.router(path.join(__dirname, 'db.json'))
// const middlewares = jsonServer.defaults()

// server.use(cors())
// server.use(jsonServer.bodyParser)
// server.use(middlewares)
// server.use(router)

// const PORT = 3001

// server.listen(PORT, () => {
//   console.log(`JSON Server is running on http://localhost:${PORT}`)
// })


const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const cors = require('cors')

server.use(middlewares)
server.use(cors)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/product/:resource/:id/show': '/:resource/:id'
}))
server.use(router)

PORT = 3001

server.listen(PORT, () => {
    console.log(`JSON Server is running on http://localhost:${PORT}`)
})

module.exports = server
