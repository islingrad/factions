import tornado.ioloop
import tornado.web
import tornado.websocket
import os.path

c = 0

class MainHandler(tornado.web.RequestHandler):
	def get(self):
		self.render('index.html')
		global c
		c = c + 1
		print(c)
		
class WebSocketHandler(tornado.websocket.WebSocketHandler):
        def open(self):
                print("socket opened")
                self.write_message("SOCKET OPENED UP")


        def on_message(self, message):
                print(u"Your message was: " + message)
                self.write_message("GOT MSG" + message)

        def on_close(self):
                pass

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
	tornado.ioloop.IOLoop.instance().start()
