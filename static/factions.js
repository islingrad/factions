var Factions = {}

Factions.msg_type = 'default';

function onLoad() {
    Factions.ws = new WebSocket("ws://localhost:8080/websocket");

    Factions.ws.onopen = function() {
    	console.log("Connection Opened");
    }

    Factions.ws.onmessage = function(e) {
       Factions.message_handler(e.data);
    };
}

onLoad();

Factions.notify = function () {
	tag = Factions.msg_type;
    var m_data = document.getElementById('msg').value;
	var msg = {type: tag, data: m_data};
    Factions.ws.send(JSON.stringify(msg));
}

Factions.clear_shown = function() {
    document.body.innerHTML = '';
}

Factions.toggle_shown_text_input = function() {
	var msg_span = document.getElementById('player_msg');
	if (msg_span.style.display == 'none'){
		msg_span.style.display = 'block';
	}
	else{
		msg_span.style.display = 'none';
	}
}

Factions.get_text_input = function(label_text, message_label) {
	//Factions.toggle_shown_text_input();
    document.getElementById('msg_label').innerHTML = label_text;
	Factions.msg_type = message_label;
    var button = document.getElementById('msg_button');
    button.addEventListener('click', Factions.notify);
	//button.addEventListener('click', Factions.toggle_shown_text_input);
}; 

Factions.get_username = function() {
    Factions.get_text_input('Username:', 'username');
}