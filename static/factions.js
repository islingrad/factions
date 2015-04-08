var Factions = {}

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

Factions.notify = function (type) {
    ws.send(type + ":" + document.getElementById('msg').value);
}

Factions.clear_shown = function() {
    document.body.innerHTML = '';
}

Factions.get_text_input = function(label_text, message_label) {
    document.getElementById('msg_label').innerHTML = label_text;

    var button = document.getElementById('msg_button');
    button.onclick = Factions.notify(message_label);
    /*
    var label = document.createElement('strong');
    label.innerHTML = label_text;
    var bod = document.body
    bod.appendChild(label)

    var text_field = document.createElement('input');
    text_field.setAttribute('type', 'text');
    text_field.setAttribute('maxlength', '25');
    text_field.id = 'msg';

    var submit_field = document.createElement('input');
    submit_field.setAttribute('type', 'button');
    submit_field.setAttribute('maxlength', '25');
    submit_field.setAttribute('Value', 'Send');
    submit_field.addEventListener('click', Factions.notify(message_label));
*/

    /*
    */
};  