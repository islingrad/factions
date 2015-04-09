import tornado.ioloop
import tornado.web
import tornado.websocket
import os.path
import webbrowser



import game_classes
import games_manager
import player_manager
import connection_manager

uid = 0

class MainHandler(tornado.web.RequestHandler):
        def get(self):
                self.render('index.html')
                global c, uid
                uid = uid + 1

class WebSocketHandler(tornado.websocket.WebSocketHandler):
        def open(self):
                self.uid = str(uid)
                self.name = 'DEFAULT NOOB NAME'
                print(self.uid, " has connected")
                connection_manager.connection_opened(self)

        def on_message(self, message):
                connection_manager.message_handler(self, message);

        def on_close(self):
                print ("closed connection: " , self.uid)
                connection_manager.connection_closed(self)

        def __repr__(self):
                return "UID: {0} , Name: {1}".format(self.uid, self.name)

settings = dict(
        template_path = os.path.join(os.path.dirname(__file__), "template"),
        static_path = os.path.join(os.path.dirname(__file__), "static"),
        debug = True
)

application = tornado.web.Application([
        (r"/", MainHandler),
        (r'/websocket', WebSocketHandler)
        ], **settings)



if __name__ == "__main__":
        port = 8080
        application.listen(8080)
        print ("server running on " + str(port))
        print ("ctrl-c to exit")
        webbrowser.open('http://localhost:' + str(port))
        tornado.ioloop.IOLoop.instance().start()
