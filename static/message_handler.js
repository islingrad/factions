Factions.message_handler = function(msg) {
	msg = JSON.parse(msg)
	if (msg.tag == 'username-accepted') {
		console.log('SUCCESSSSSSSSS')
	}
	if (msg.tag == 'global_chat') {

		Factions.global_chat(msg);
	}
}

Factions.global_chat = function (msg) {
	var new_msg = document.createElement('p');
	new_msg.innerHTML = msg.data.origin + " Says: " + msg.data.message;
	var chat_div = document.getElementById('global_chat');
	chat_div.appendChild(new_msg);
	console.log('msg added');
}