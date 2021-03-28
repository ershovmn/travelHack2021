const express = require('express')
const cors = require('cors')
const socketIO = require('socket.io')
const http = require('http')
const qrcode = require('qrcode')
const fs = require('fs')
const fetch = require('node-fetch')

const app = express()
let srv = http.Server(app)
const io = socketIO(srv)

app.use('/static', express.static(__dirname + '/static'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html')
})

let token = {}
let sockets = []

app.get('/redirect', (req, res) => {
    console.log(req.query)
    let  payload = JSON.parse(req.query.payload)
    console.log(payload)
    let flag = false
    sockets.forEach(item => {
        if(item.id === payload.id) {
            token[payload.id] = req.query.token
            let flag = true
            res.sendFile(__dirname + '/static/sucsesfull.html')
            fetch('https://cd53fe9a8c5c.ngrok.io/api/fields?token=' + req.query.token)
                .then(res => res.json())
                .then(data => {
                    item.emit('data', data)
                })
                .catch(err => {
                })
        }
    })
    if(!flag) {
        res.sendFile(__dirname + '/static/fail.html')
    }
})

app.get('/fail', (req, res) => {
    res.sendFile(__dirname + '/static/fail.html')
})

app.get('/test', (req, res) => {
    res.sendFile(__dirname + '/static/untitled.html')
})

io.on('connection', (socket) => {
    console.log('connectiom')
    sockets.push(socket)
    socket.on('getQRcode', (msg) => {
        console.log('getQrCode')
        qrcode.toFile(`${__dirname}/static/codes/${socket.id}.png`,
            `https://cd53fe9a8c5c.ngrok.io/oauth_sessions/init/2/new?optional_fields=*&signature=test&payload=${JSON.stringify({id: socket.id})}`, () => {
                socket.emit('image', `/static/codes/${socket.id}.png`)
            })
    })
})

srv.listen(process.env.PORT || 8080)