##Connection Manager
	

##Connections: a dictionary with uid as key and websocket connection as value
connections = {}

def connection_opened(ws):
	connections[ws.uid] = ws;

def connection_closed(ws):
	del connections[ws.uid];
