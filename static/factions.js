var Factions = {}

Factions.msg_type = 'default';

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

Factions.notify = function () {
	tag = Factions.msg_type;
    var m_data = document.getElementById('msg').value;
	var msg = {type: tag, data: m_data};
    ws.send(JSON.stringify(msg));
}

Factions.clear_shown = function() {
    document.body.innerHTML = '';
}

Factions.toggle_shown_text_input = function() {
	var msg_span = document.getElementById('player_msg');
	console.log(msg_span.style.display);
	if (msg_span.style.display == 'none'){
		msg_span.style.display = 'block';
	}
	else{
		msg_span.style.display = 'none';
	}
}

Factions.get_text_input = function(label_text, message_label) {
	Factions.toggle_shown_text_input();
    document.getElementById('msg_label').innerHTML = label_text;
	Factions.msg_type = message_label;
    var button = document.getElementById('msg_button');
    button.addEventListener('click', Factions.notify);
	button.addEventListener('click', Factions.toggle_shown_text_input);
    //button.addEventListener('click', Factions.clear_shown);
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