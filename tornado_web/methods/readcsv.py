import pickle as pk

def read_csv(site_name):
    with open('./node_dict.pkl', 'rb') as node_dict_file:
        load_node_dict =pk.load(node_dict_file)
    return([site.name for site in load_node_dict[site_name].node_list])
