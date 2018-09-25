# !/usr/bin/env Python
# coding=utf-8

"""
the url structure of website
"""

from handlers.index import IndexHandler
from handlers.user import UserHandler

url = [
    (r'/', IndexHandler),
    (r'/user', UserHandler),
]
