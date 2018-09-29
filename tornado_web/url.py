# !/usr/bin/env Python
# coding=utf-8

"""
the url structure of website
"""

from handlers.index import IndexHandler
from handlers.sites import SitesHandler

url = [
    (r'/', IndexHandler),
    (r'/sites', SitesHandler),
]
