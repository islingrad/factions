##Connection Manager

import json

class Client_message(object):
	def __init__(self, tag, data):
		self.tag = tag
		self.data = data;

##Connections: a dictionary with uid as key and websocket connection as value
connections = {}

def connection_opened(ws):
	connections[ws.uid] = ws;
	

def connection_closed(ws):
	del connections[ws.uid];

def message_handler(ws, message):
	decoded = json.loads(message)
	tag = decoded['type']
	if tag == 'username':
		assign_username(ws, decoded)
	elif tag == 'global_msg':
		update_all(ws, decoded)
	else:
		print('unknown message type received')

def assign_username(ws, msg):
	ws.name = msg['data']
	print(connections)
	accepted = {'tag': 'username-accepted', 'data': ws.name}
	encode = json.dumps(accepted)
	ws.write_message(encode)

def update_all(origin_player, msg):
	print('got here ', msg)
	my_msg = {'origin': origin_player.name, 'message' : msg['data']}
	for socket in connections.values():
		socket.write_message({'tag': 'global_chat', 'data' : my_msg })

