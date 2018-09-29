import tornado.web
import methods.readcsv as mrc

class SitesHandler(tornado.web.RequestHandler):
    def get(self):
        dest = self.get_argument("dest")
        dest_rels = mrc.read_csv(dest)
        self.render("sites.html", rels = dest_rels)
