
#coding:utf-8

import tornado.httpserver
import tornado.ioloop
import tornado.options
import tornado.web

from tornado.options import define, options
from tornado.ioloop import IOLoop
from tornado.tcpserver import TCPServer
from tornado.iostream import StreamClosedError
from tornado import gen
from tornado.escape import json_encode,json_decode
import logging
import json
from query import GetListData,GetAlarmData,GetMessageData

define("http_port", default=3000, help="run on the given port", type=int)


class SensorList(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Content-Type', 'application/json; charset=UTF-8')
        self.add_header("Access-Control-Allow-Origin", "*")
        self.write(json_encode(GetListData()))
        # self.finish()

class SensorMap(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Content-Type', 'application/json; charset=UTF-8')
        self.add_header("Access-Control-Allow-Origin", "*")
        self.write(json_encode(GetListData()))



class AlarmRecord(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Content-Type', 'application/json; charset=UTF-8')
        self.add_header("Access-Control-Allow-Origin", "*")
        self.write(json_encode(GetAlarmData()))


class Message(tornado.web.RequestHandler):
    def get(self):
        self.set_header('Content-Type', 'application/json; charset=UTF-8')
        self.add_header("Access-Control-Allow-Origin", "*")
        self.write(json_encode(GetMessageData()))

class TerminalHandlerServer(TCPServer):
    async def handle_stream(self, stream, address):
        while True:
            try:
                block = 1000
                data = await stream.read_bytes(num_bytes=block,partial=False)
                #handler your data
                if data:
                    logging.error(data)
                    await stream.write(data)
                else:
                    logging.error("no info ")
            except StreamClosedError:
                break
    
    def DataHandler(data):
        pass




if __name__ == "__main__":
    options.parse_command_line()
    app = tornado.web.Application(
        handlers=[
            (r"/sensorList", SensorList),
            (r"/sensor/SensorMap",SensorMap),
            (r"/statement/policeStatistics",AlarmRecord),
            (r"/historyMessage",Message)
        ]
    )
    app.listen(options.http_port)
    server = TerminalHandlerServer()
    server.listen(9990)
    server.start()
    tornado.ioloop.IOLoop.current().start()
