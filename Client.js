const url='ws://localhost:8080'
const connection = new WebSocket(url)

connection.onopen=()=>{
    connection.send("hello server")
}

connection.onerror=error=>{
    console.log(error)
}

connection.onmessage=e=>{
    console.log(e.data)
}
