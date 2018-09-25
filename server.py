#!/usr/bin/env Python
# coding=utf-8

import tornado.ioloop
import tornado.options
import tornado.httpserver

from application import application

from tornado.options import define, options

define("port", default = 8000, help = "run on the given port", type = int)

class siteNode(object):
    node_list = []

    def __init__(self, name, rank):
        self.name = name
        self.rank = rank

    def recommend(self):
        sort_dict = {}
		
        for i, site in enumerate(self.node_list):
            sort_dict[site.name] = {}
            sort_dict[site.name]['relate'] = i+1

        ranking = sorted(self.node_list, key=lambda x: x.rank)

        for i, site in enumerate(ranking):
            sort_dict[site.name]['rank'] = i+1

        return sort_dict

def main():
    tornado.options.parse_command_line()
    http_server = tornado.httpserver.HTTPServer(application)
    http_server.listen(options.port)

    print("Development server is running at http://127.0.0."+str(options.port))
    print("Quit the server with Control-C")

    tornado.ioloop.IOLoop.instance().start()

if __name__ == "__main__":
    main()
