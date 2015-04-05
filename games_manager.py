active_games = {}

game_id = 0;
def create_game(uid, game_name, max_players):
	new_game = Game(uid, game_name, max_players);
	active_games[game_id] = new_game;
	join_game(uid, game_id);

def join_game(uid, game_id, player_name):
	game = active_games[game_id]
	if len(game.player_list) == max_players:
		print("GAME FULL")
		return

	new_p = create_player(connections[uid].player_name)
	game.player_list.append(new_p)
	