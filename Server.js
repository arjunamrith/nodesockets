const WebSocket=require('ws')
port=8080
const wss=new WebSocket.Server({port:port})
console.log(`Server running on ${port}`)

wss.on('connection',ws=>{
    ws.on('message',message=>{
        console.log(`received message=>${message}`)
        ws.send('hello client')
    })
})