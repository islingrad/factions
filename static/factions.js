var ws;

function onLoad() {
    ws = new WebSocket("ws://localhost:8080/websocket");

    ws.onopen = function(){
    	console.log("ehelfksd");
    }

    ws.onmessage = function(e) {
       console.log(e.data);
    };

    
}

onLoad();

function sendMsg() {
    ws.send(document.getElementById('msg').value);
}