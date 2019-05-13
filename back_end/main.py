
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


define("http_port", default=3000, help="run on the given port", type=int)


class SensorList(tornado.web.RequestHandler):
    def get(self):
        data1 = {
            "sensorList":[
                {
                    "collectorNumber": '112233',
                    "sensorNumber": '223344',
                    "vibrationThreshold": 99,
                    "cycle": '60',
                    "temperature": '25℃',
                    "humidity": '50℃',
                    "longitude": 135,
                    "latitude":  15,
                    "sectionId": '2345',
                    "creatTime":  '2019-04-30 12:35:04',
                    "status": '开启'
                },
                {
                    "collectorNumber": '112233',
                    "sensorNumber": '223344',
                    "vibrationThreshold": 99,
                    "cycle": '60',
                    "temperature": '25℃',
                    "humidity": '50℃',
                    "longitude": 135,
                    "latitude":  15,
                    "sectionId": '2345',
                    "creatTime":  '2019-05-2 12:35:04',
                    "status": '开启'
                },
            ]
        }

        self.set_header('Content-Type', 'application/json; charset=UTF-8')
        self.add_header("Access-Control-Allow-Origin", "*")
        self.write(json_encode(data1))
        # self.finish()
        # self.write("test")

class SensorMap(tornado.web.RequestHandler):
    def get(self):
        self.write("heel")



class AlarmRecord(tornado.web.RequestHandler):
    def get(self):
        result = {
            "result": 'success',
            'status': True,
            'code': 200
        }
        self.write(json_encode(result))
    



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
            (r"/statement/policeStatistics",AlarmRecord)
        ]
    )
    app.listen(options.http_port)
    server = TerminalHandlerServer()
    server.listen(9990)
    server.start()
    tornado.ioloop.IOLoop.current().start()
