import json
import numpy as np

def check_height(x):
    if 8 <= x <= 11 :
        return 11
    elif 10 <= x <= 12 :
        return 12
    elif 11 <= x <= 13 :
        return 13
    elif 12 <= x <= 15 :
        return 15
    elif 13 <= x <= 16 :
        return 16
    elif 14 <= x <= 17 :
        return 17
    elif 15 <= x <= 19 :
        return 19
    elif 16 <= x <= 20 :
        return 20
    elif 17 <= x <= 21 :
        return 21
    elif 18 <= x <= 23 :
        return 23
    elif 20 <= x <= 24 :
        return 24
    elif 21 <= x <= 25 :
        return 25
    elif 22 <= x <= 27 :
        return 27
    elif 23 <= x <= 28 :
        return 28
    elif 24 <= x <= 29 :
        return 29
    elif 25 <= x <= 31 :
        return 31
    elif 26 <= x <= 32 :
        return 32
    elif 27 <= x <= 33 :
        return 33
    elif 28 <= x <= 35 :
        return 35
    elif 30 <= x <= 36 :
        return 36
    elif 31 <= x <= 37 :
        return 37
    elif 32 <= x <= 39 :
        return 39
    elif 33 <= x <= 40 :
        return 40
    elif 34 <= x <= 41 :
        return 41
    elif 35 <= x <= 43 :
        return 43
    elif 36 <= x <= 44 :
        return 44
    elif 37 <= x <= 45 :
        return 45
    elif 38 <= x <= 47 :
        return 47
    elif 39 <= x <= 48 :
        return 48
    elif 40 <= x <= 49 :
        return 49
    elif 41 <= x <= 51 :
        return 51
    elif 43 <= x <= 52 :
        return 52
    elif 44 <= x <= 53 :
        return 53
    elif 45 <= x <= 55 :
        return 55
    elif 46 <= x <= 56 :
        return 56
    elif 47 <= x <= 57 :
        return 57
    elif 48 <= x <= 59 :
        return 59
    elif 49 <= x <= 60 :
        return 60
    elif 50 <= x <= 61 :
        return 61
    elif 51 <= x <= 63 :
        return 63
    elif 53 <= x <= 64 :
        return 64
    elif 54 <= x <= 65 :
        return 65
    elif 55 <= x <= 67 :
        return 67
    elif 56 <= x <= 68 :
        return 68
    elif 57 <= x <= 69 :
        return 69
    elif 58 <= x <= 71 :
        return 71
    elif 59 <= x <= 72 :
        return 72
    elif 60 <= x <= 73 :
        return 73
    elif 61 <= x <= 75 :
        return 75
    elif 63 <= x <= 76 :
        return 76
    elif 64 <= x <= 77 :
        return 77
    elif 65 <= x <= 79 :
        return 79
    elif 66 <= x <= 80 :
        return 80
    elif 67 <= x <= 81 :
        return 81
    elif 68 <= x <= 83 :
        return 83
    elif 69 <= x <= 84 :
        return 84
    elif 70 <= x <= 85 :
        return 85
    elif 71 <= x <= 87 :
        return 87
    elif 72 <= x <= 88 :
        return 88
    elif 73 <= x <= 89 :
        return 89
    elif 74 <= x <= 91 :
        return 91
    elif 76 <= x <= 92 :
        return 92
    elif 77 <= x <= 93 :
        return 93
    elif 78 <= x <= 95 :
        return 95
    elif 79 <= x <= 96 :
        return 96
    elif 80 <= x <= 97 :
        return 97
    elif 81 <= x <= 99 :
        return 99
    elif 82 <= x <= 100 :
        return 100
    elif 83 <= x <= 101 :
        return 101
    elif 84 <= x <= 103 :
        return 103
    elif 85 <= x <= 104 :
        return 104
    elif 86 <= x <= 105 :
        return 105
    elif 87 <= x <= 107 :
        return 107
    elif 89 <= x <= 108 :
        return 108
    elif 90 <= x <= 109 :
        return 109
    elif 91 <= x <= 111 :
        return 111
    elif 92 <= x <= 112 :
        return 112
    elif 93 <= x <= 113 :
        return 113
    elif 94 <= x <= 115 :
        return 115
    elif 95 <= x <= 116 :
        return 116
    elif 96 <= x <= 117 :
        return 117
    elif 97 <= x <= 119 :
        return 119
    elif 99 <= x <= 120 :
        return 120
    elif 100 <= x <= 121 :
        return 121
    elif 101 <= x <= 123 :
        return 123
    elif 102 <= x <= 124 :
        return 124
    elif 103 <= x <= 125 :
        return 125
    elif 104 <= x <= 127 :
        return 127
    elif 105 <= x <= 128 :
        return 128
    elif 106 <= x <= 129 :
        return 129
    elif 107 <= x <= 131 :
        return 131
    elif 109 <= x <= 132 :
        return 132
    elif 110 <= x <= 133 :
        return 133
    elif 111 <= x <= 135 :
        return 135
    elif 112 <= x <= 136 :
        return 136
    elif 113 <= x <= 137 :
        return 137
    elif 114 <= x <= 139 :
        return 139
    elif 115 <= x <= 140 :
        return 140
    elif 116 <= x <= 141 :
        return 141
    elif 117 <= x <= 143 :
        return 143
    elif 118 <= x <= 144 :
        return 144
    elif 119 <= x <= 145 :
        return 145
    elif 120 <= x <= 147 :
        return 147
    elif 122 <= x <= 148 :
        return 148
    elif 123 <= x <= 149 :
        return 149
    elif 124 <= x <= 151 :
        return 151
    elif 125 <= x <= 152 :
        return 152
    elif 126 <= x <= 153 :
        return 153
    elif 127 <= x <= 155 :
        return 155
    elif 128 <= x <= 156 :
        return 156
    elif 129 <= x <= 157 :
        return 157
    elif 130 <= x <= 159 :
        return 159
    elif 132 <= x <= 160 :
        return 160
    elif 133 <= x <= 161 :
        return 161
    elif 134 <= x <= 163 :
        return 163
    elif 135 <= x <= 164 :
        return 164
    elif 136 <= x <= 165 :
        return 165
    elif 137 <= x <= 167 :
        return 167
    elif 138 <= x <= 168 :
        return 168
    elif 139 <= x <= 169 :
        return 169
    elif 140 <= x <= 171 :
        return 171
    elif 142 <= x <= 172 :
        return 172
    elif 143 <= x <= 173 :
        return 173
    elif 144 <= x <= 175 :
        return 175
    elif 145 <= x <= 176 :
        return 176
    elif 146 <= x <= 177 :
        return 177
    elif 147 <= x <= 179 :
        return 179
    elif 148 <= x <= 180 :
        return 180
    elif 149 <= x <= 181 :
        return 181
    elif 150 <= x <= 183 :
        return 183
    elif 151 <= x <= 184 :
        return 184
    elif 152 <= x <= 185 :
        return 185
    elif 153 <= x <= 187 :
        return 187
    elif 155 <= x <= 188 :
        return 188
    elif 156 <= x <= 189 :
        return 189
    elif 157 <= x <= 191 :
        return 191
    elif 158 <= x <= 192 :
        return 192
    elif 159 <= x <= 193 :
        return 193
    elif 160 <= x <= 195 :
        return 195
    elif 161 <= x <= 196 :
        return 196
    elif 162 <= x <= 197 :
        return 197
    elif 163 <= x <= 199 :
        return 199
    elif 165 <= x <= 200 :
        return 200
    elif 166 <= x <= 201 :
        return 201
    elif 167 <= x <= 203 :
        return 203
    elif 168 <= x <= 204 :
        return 204
    elif 169 <= x <= 205 :
        return 205
    elif 170 <= x <= 207 :
        return 207
    
    else:
        return x   
            
        
def pxt_opt(x):
    x = round(x*3/4)
    return x


def check_lines(x,box_height,image_height):
    if box_height in range (image_height):
        if x in range (8,12):
            if box_height % x == 0:
                return 11
            else :
                return x
        elif x in range (10,13):
            if box_height % x == 0:
                return 12
            else :
                return x
        elif x in range (11,14):
            if box_height % x == 0:
                return 13
            else :
                return x
        elif x in range (12,16):
            if box_height % x == 0:
                return 15
            else :
                return x
        elif x in range (13,17):
            if box_height % x == 0:
                return 16
            else :
                return x
        elif x in range (14,18):
            if box_height % x == 0:
                return 17
            else :
                return x    
        elif x in range (15,20):
            if box_height % x == 0:
                return  19
            else :
                return x
        elif x in range (16,21):
            if box_height % x == 0:
                return 20
            else :
                return x   
        elif x in range (17,22):
            if box_height % x == 0:
                return 21
            else :
                return x 
        elif x in range (18,24):
            if box_height % x == 0:
                return 23
            else :
                return x
        elif x in range (20,25):
            if box_height % x == 0:
                return 24
            else :
                return x   
        elif x in range (21,26):
            if box_height % x == 0:
                return 25
            else :
                return x 
        elif x in range (22,28):
            if box_height % x == 0:
                return 27
            else :
                return x
        elif x in range (23,29):
            if box_height % x == 0:
                return 28
            else :
                return x
        elif x in range (24,30):
            if box_height % x == 0:
                return 29
            else :
                return x
        elif x in range (25,32):
            if box_height % x == 0:
                return 31
            else :
                return x
        elif x in range (26,33):
            if box_height % x == 0:
                return 32
            else :
                return x
        elif x in range (27,34):
            if box_height % x == 0:
                return 33
            else :
                return x
        elif x in range (28,36):
            if box_height % x == 0:
                return 35
            else :
                return x
        elif x in range (30,37):
            if box_height % x == 0:
                return 36
            else :
                return x
        elif x in range (31,38):
            if box_height % x == 0:
                return 37
            else :
                return x
        elif x in range (32,40):
            if box_height % x == 0:
                return 39
            else :
                return x
        elif x in range (33,41):
            if box_height % x == 0:
                return 40
            else :
                return x
        elif x in range (34,42):
            if box_height % x == 0:
                return 41
            else :
                return x
        elif x in range (35,44):
            if box_height % x == 0:
                return 43
            else :
                return x
        elif x in range (36,45):
            if box_height % x == 0:
                return 44
            else :
                return x
        elif x in range (37,46):
            if box_height % x == 0:
                return 45
            else :
                return x
        elif x in range (38,48):
            if box_height % x == 0:
                return 47
            else :
                return x
        elif x in range (39,49):
            if box_height % x == 0:
                return 48
            else :
                return x
        elif x in range (40,50):
            if box_height % x == 0:
                return 49
            else :
                return x
        elif x in range (41,52):
            if box_height % x == 0:
                return 51
            else :
                return x
        elif x in range (43,53):
            if box_height % x == 0:
                return 52
            else :
                return x
        elif x in range (44,54):
            if box_height % x == 0:
                return 53
            else :
                return x
        elif x in range (45,56):
            if box_height % x == 0:
                return 55
            else :
                return x
        elif x in range (46,57):
            if box_height % x == 0:
                return 56
            else :
                return x
        elif x in range (47,58):
            if box_height % x == 0:
                return 57
            else :
                return x
        elif x in range (48,60):
            if box_height % x == 0:
                return 59
            else :
                return x
        elif x in range (49,61):
            if box_height % x == 0:
                return 60
            else :
                return x
        elif x in range (50,62):
            if box_height % x == 0:
                return 61
            else :
                return x
        elif x in range (51,64):
            if box_height % x == 0:
                return 63
            else :
                return x
        elif x in range (53,65):
            if box_height % x == 0:
                return 64
            else :
                return x
        elif x in range (54,66):
            if box_height % x == 0:
                return 65
            else :
                return x
        elif x in range (55,68):
            if box_height % x == 0:
                return 67
            else :
                return x
        elif x in range (56,69):
            if box_height % x == 0:
                return 68
            else :
                return x
        elif x in range (57,70):
            if box_height % x == 0:
                return 69
            else :
                return x
        elif x in range (58,72):
            if box_height % x == 0:
                return 71
            else :
                return x
        elif x in range (59,73):
            if box_height % x == 0:
                return 72
            else :
                return x
        elif x in range (60,74):
            if box_height % x == 0:
                return 73
            else :
                return x
        elif x in range (61,76):
            if box_height % x == 0:
                return 75
            else :
                return x
        elif x in range (63,77):
            if box_height % x == 0:
                return 76
            else :
                return x
        elif x in range (64,78):
            if box_height % x == 0:
                return 77
            else :
                return x
        elif x in range (65,80):
            if box_height % x == 0:
                return 79
            else :
                return x
        elif x in range (66,81):
            if box_height % x == 0:
                return 80
            else :
                return x
        elif x in range (67,82):
            if box_height % x == 0:
                return 81
            else :
                return x
        elif x in range (68,84):
            if box_height % x == 0:
                return 83
            else :
                return x
        elif x in range (69,85):
            if box_height % x == 0:
                return 84
            else :
                return x
        elif x in range (70,86):
            if box_height % x == 0:
                return 85
            else :
                return x
        elif x in range (71,88):
            if box_height % x == 0:
                return 87
            else :
                return x
        elif x in range (72,89):
            if box_height % x == 0:
                return 88
            else :
                return x
        elif x in range (73,90):
            if box_height % x == 0:
                return 89
            else :
                return x
        elif x in range (74,92):
            if box_height % x == 0:
                return 91
            else :
                return x
        elif x in range (76,93):
            if box_height % x == 0:
                return 92
            else :
                return x
        elif x in range (77,94):
            if box_height % x == 0:
                return 93
            else :
                return x
        elif x in range (78,96):
            if box_height % x == 0:
                return 95
            else :
                return x
        elif x in range (79,97):
            if box_height % x == 0:
                return 96
            else :
                return x
        elif x in range (80,98):
            if box_height % x == 0:
                return 97
            else :
                return x
        elif x in range (81,100):
            if box_height % x == 0:
                return 99
            else :
                return x
        elif x in range (82,101):
            if box_height % x == 0:
                return 100
            else :
                return x
        elif x in range (83,102):
            if box_height % x == 0:
                return 101
            else :
                return x
        elif x in range (84,104):
            if box_height % x == 0:
                return 103
            else :
                return x
        elif x in range (85,105):
            if box_height % x == 0:
                return 104
            else :
                return x
        elif x in range (86,106):
            if box_height % x == 0:
                return 105
            else :
                return x
        elif x in range (87,108):
            if box_height % x == 0:
                return 107
            else :
                return x
        elif x in range (89,109):
            if box_height % x == 0:
                return 108
            else :
                return x
        elif x in range (90,110):
            if box_height % x == 0:
                return 109
            else :
                return x
        elif x in range (91,112):
            if box_height % x == 0:
                return 111
            else :
                return x
        elif x in range (92,113):
            if box_height % x == 0:
                return 112
            else :
                return x
        elif x in range (93,114):
            if box_height % x == 0:
                return 113
            else :
                return x
        elif x in range (94,116):
            if box_height % x == 0:
                return 115
            else :
                return x
        elif x in range (95,117):
            if box_height % x == 0:
                return 116
            else :
                return x
        elif x in range (96,118):
            if box_height % x == 0:
                return 117
            else :
                return x
        elif x in range (97,120):
            if box_height % x == 0:
                return 119
            else :
                return x
        elif x in range (99,121):
            if box_height % x == 0:
                return 120
            else :
                return x
        elif x in range (100,122):
            if box_height % x == 0:
                return 121
            else :
                return x
        elif x in range (101,124):
            if box_height % x == 0:
                return 123
            else :
                return x
        elif x in range (102,125):
            if box_height % x == 0:
                return 124
            else :
                return x
        elif x in range (103,126):
            if box_height % x == 0:
                return 125
            else :
                return x
        elif x in range (104,128):
            if box_height % x == 0:
                return 127
            else :
                return x
        elif x in range (105,129):
            if box_height % x == 0:
                return 128
            else :
                return x
        elif x in range (106,130):
            if box_height % x == 0:
                return 129
            else :
                return x
        elif x in range (107,132):
            if box_height % x == 0:
                return 131
            else :
                return x
        elif x in range (109,133):
            if box_height % x == 0:
                return 132
            else :
                return x
        elif x in range (110,134):
            if box_height % x == 0:
                return 133
            else :
                return x
        elif x in range (111,136):
            if box_height % x == 0:
                return 135
            else :
                return x
        elif x in range (112,137):
            if box_height % x == 0:
                return 136
            else :
                return x
        elif x in range (113,138):
            if box_height % x == 0:
                return 137
            else :
                return x
        elif x in range (114,140):
            if box_height % x == 0:
                return 139
            else :
                return x
        elif x in range (115,141):
            if box_height % x == 0:
                return 140
            else :
                return x
        elif x in range (116,142):
            if box_height % x == 0:
                return 141
            else :
                return x
        elif x in range (117,144):
            if box_height % x == 0:
                return 143
            else :
                return x
        elif x in range (118,145):
            if box_height % x == 0:
                return 144
            else :
                return x
        elif x in range (119,146):
            if box_height % x == 0:
                return 145
            else :
                return x
        elif x in range (120,148):
            if box_height % x == 0:
                return 147
            else :
                return x
        elif x in range (122,149):
            if box_height % x == 0:
                return 148
            else :
                return x
        elif x in range (123,150):
            if box_height % x == 0:
                return 149
            else :
                return x
        elif x in range (124,152):
            if box_height % x == 0:
                return 151
            else :
                return x
        elif x in range (125,153):
            if box_height % x == 0:
                return 152
            else :
                return x
        elif x in range (126,154):
            if box_height % x == 0:
                return 153
            else :
                return x
        elif x in range (127,156):
            if box_height % x == 0:
                return 155
            else :
                return x
        elif x in range (128,157):
            if box_height % x == 0:
                return 156
            else :
                return x
        elif x in range (129,158):
            if box_height % x == 0:
                return 157
            else :
                return x
        elif x in range (130,160):
            if box_height % x == 0:
                return 159
            else :
                return x
        elif x in range (132,161):
            if box_height % x == 0:
                return 160
            else :
                return x
        elif x in range (133,162):
            if box_height % x == 0:
                return 161
            else :
                return x
        elif x in range (134,164):
            if box_height % x == 0:
                return 163
            else :
                return x
        elif x in range (135,165):
            if box_height % x == 0:
                return 164
            else :
                return x
        elif x in range (136,166):
            if box_height % x == 0:
                return 165
            else :
                return x
        elif x in range (137,168):
            if box_height % x == 0:
                return 167
            else :
                return x
        elif x in range (138,169):
            if box_height % x == 0:
                return 168
            else :
                return x
        elif x in range (139,170):
            if box_height % x == 0:
                return 169
            else :
                return x
        elif x in range (140,172):
            if box_height % x == 0:
                return 171
            else :
                return x
        elif x in range (142,173):
            if box_height % x == 0:
                return 172
            else :
                return x
        elif x in range (143,174):
            if box_height % x == 0:
                return 173
            else :
                return x
        elif x in range (144,176):
            if box_height % x == 0:
                return 175
            else :
                return x
        elif x in range (145,177):
            if box_height % x == 0:
                return 176
            else :
                return x
        elif x in range (146,178):
            if box_height % x == 0:
                return 177
            else :
                return x
        elif x in range (147,180):
            if box_height % x == 0:
                return 179
            else :
                return x
        elif x in range (148,181):
            if box_height % x == 0:
                return 180
            else :
                return x
        elif x in range (149,182):
            if box_height % x == 0:
                return 181
            else :
                return x
        elif x in range (150,184):
            if box_height % x == 0:
                return 183
            else :
                return x
        elif x in range (151,185):
            if box_height % x == 0:
                return 184
            else :
                return x
        elif x in range (152,186):
            if box_height % x == 0:
                return 185
            else :
                return x
        elif x in range (153,188):
            if box_height % x == 0:
                return 187
            else :
                return x
        elif x in range (155,189):
            if box_height % x == 0:
                return 188
            else :
                return x
        elif x in range (156,190):
            if box_height % x == 0:
                return 189
            else :
                return x
        elif x in range (160,196):
            if box_height % x == 0:
                return 195 
            else :
                return x
        elif x in range (161,197):
            if box_height % x == 0:
                return 196
            else :
                return x
        elif x in range (162,198):
            if box_height % x == 0:
                return 197
            else :
                return x
        elif x in range (163,200):
            if box_height % x == 0:
                return 199
            else :
                return x
        elif x in range (165,201):
            if box_height % x == 0:
                return 200
            else :
                return x
        elif x in range (166,202):
            if box_height % x == 0:
                return 201
            else :
                return x    
        elif x in range (167,204):
            if box_height % x == 0:
                return 203
            else :
                return x
        elif x in range (168,205):
            if box_height % x == 0:
                return 204
            else :
                return x
        elif x in range (169,206):
            if box_height % x == 0:
                return 205
            else :
                return x
        elif x in range (170,208):
            if box_height % x == 0:
                return 207
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

        item['text_size'] = pt_size


    """     print(id_list)
    print(box_height_list)
    print(text_height)
    print(text_size)
    print(id_font)
    print(image_height)
    print(image_width) """

    return json.dumps(json_data)

