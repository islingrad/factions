Factions.landing_page = function (){
	
	var body = document.getElementsByTagName('body');
	var new_element = document.createElement('div');
	new_element.id = 'shown_element';
	body[0].appendChild(new_element);

	var join_game = document.createElement('button');
	join_game.innerHTML = 'Join Game';
	var create_game = document.createElement('button');
	create_game.innerHTML = 'Create Game'
	new_element.appendChild(join_game);
	new_element.appendChild(create_game);
}

Factions.get_username