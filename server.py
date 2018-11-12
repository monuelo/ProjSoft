from http.server import BaseHTTPRequestHandler, HTTPServer
import os

class testHTTPServer_RequestHandler(BaseHTTPRequestHandler):
 
  def do_GET(self):
        if self.path=="/":
            self.path="/index.html"
        
        try:

            sendReply = False
            if self.path.endswith(".html"):
                mimetype='text/html'
                sendReply = True
            if self.path.endswith(".jpg"):
                mimetype='image/jpg'
                sendReply = True
            if self.path.endswith(".gif"):
                mimetype='image/gif'
                sendReply = True
            if self.path.endswith(".js"):
                mimetype='application/javascript'
                sendReply = True
            if self.path.endswith(".css"):
                mimetype='text/css'
                sendReply = True
                
            if sendReply == True:
                f = open(os.curdir + os.sep + self.path) 
                self.send_response(200)
                self.send_header('Content-type',mimetype)
                self.end_headers()
                self.wfile.write(bytes(f.read(), 'utf-8'))
                f.close()
            return

        except IOError:
            self.send_error(404,'File Not Found: %s' % self.path)

        self.send_response(200)
 
        self.send_header('Content-type','text/html')
        self.send_header('117110647-projsw','text/html')
        self.end_headers()
 
        return
 
def run():
  print('starting server...')
 
  server_address = ('127.0.0.1', 8081)
  httpd = HTTPServer(server_address, testHTTPServer_RequestHandler)
  print('running server...')
  httpd.serve_forever()
  
run()