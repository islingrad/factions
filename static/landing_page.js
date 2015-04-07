function landing_page(){
	//factions.clear_shown();
	var body = document.getElementsByTagName('body');
	var new_element = document.createElement('div');
	new_element.id = 'shown_element';
	body.appendChild(new_element);

	var join_game = document.createElement('button');
	var create_game = document.createElement('button');
	new_element.appendChild(join_game);
	new_element.appendChild(create_game);
}

