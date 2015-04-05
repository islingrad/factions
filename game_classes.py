##game_infrastructure



## player_list is a dict of uid : Player objects
class Game(object):
	"""docstring for Game"""
	def __init__(self, uid, game_name, max_players, player_list = {}):
		##super(Game, self).__init__()
		self.host = uid;
		self.game_name = game_name
		self.max_players = max_players
		self.player_list = player_list;



class Entity(object):
	"""docstring for Entity"""
	def __init__(self, base_health = 100, worker_count = 10, money = 0, army = 0):
		##super(Entity, self).__init__()
		self.base_health = base_health
		self.worker_count = worker_count;
		self.money = money;
		self.army = army;


##Player inherits from entity
##Player_name is client-defined String
##UID is server-defined  Int
class Player(Entity):
	def __init__(self, uid, player_name ='Default Name'):
		self.player_name = player_name;
		self.uid = uid;
