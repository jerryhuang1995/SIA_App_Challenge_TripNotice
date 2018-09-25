#!/usr/bin/env Python
# coding=utf-8

import tornado.web
import methods.readcsv as mrc
import json

class IndexHandler(tornado.web.RequestHandler):
    def get(self):
        one_city = "Beijing"
        self.render("index.html", city=one_city)

    def post(self):
        dest = self.get_argument("destination")
