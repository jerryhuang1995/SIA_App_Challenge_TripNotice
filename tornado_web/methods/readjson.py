import json

def get_relsites(site_name):
    with open('../tn_beijing.json', 'rb') as json_file:
        tn_siteinfo =json.load(json_file)

    for popu in tn_siteinfo.values():
        if popu['site'] == site_name:
            return([relate_site['name'] for relate_site in popu['relate'].values()])
