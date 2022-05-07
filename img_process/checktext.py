import json
import numpy as np
import math 

def check_height(x):
    if 80 <= x <= 97 :
        return 97
    else:
        return x
            
        
def pxt_opt(x):
    x = round(x*3/4)
    return x


def check_lines(x,box_height,image_height):
    if box_height in range (image_height):
        if x in range (80,98):
            if box_height % x == 0:
                return 97
            else :
                return x
        else :
            return x
    else:
        return x           
  

  
def calculation(json_data):
    data = json_data['sub']
    image_height = json_data['height']
    image_width = json_data['width']

    id_list = []
    box_height_list = []
    text_height = []
    text_size = []
    px_text_size = []
   

    for item in data:
        text_id = item['id']
        id_list.append(text_id)

        box_height  = int(item['height'])
        box_height_list.append(box_height)

        px_height = check_height(box_height)
        text_height.append(px_height)
    
        px_size = check_lines(px_height,box_height,image_height)
        px_text_size.append(px_size)
    
        pt_size = (pxt_opt(px_size))
        text_size.append(pt_size)

    id_font = dict(zip(id_list, text_size))

    """     print(id_list)
    print(box_height_list)
    print(text_height)
    print(text_size)
    print(id_font)
    print(image_height)
    print(image_width) """

    return json.dumps(json_data)

