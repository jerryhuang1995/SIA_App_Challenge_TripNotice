import tornado.web
import methods.readjson as mrj

class SitesHandler(tornado.web.RequestHandler):
    def get(self):
        dest = self.get_argument("dest")
        dest_rels = mrj.get_relsites(dest)
        self.render("sites.html", rels = dest_rels)
