import cv2
import numpy as np
import matplotlib.pyplot as plt
import detect
import json

class ImageProcess():

    def __init__(self, img):
        self.img = img

    def dilate_image(self,img_name):
        img = self.img
        mask = np.ones(img.shape[:2], np.uint8)
        img_gray =  cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        img_gray = cv2.bitwise_and(img_gray,img_gray, mask=mask)
       
        edges = cv2.Canny(img_gray,128,255)
        rect_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (15,15))
        edges = cv2.dilate(edges, rect_kernel, iterations = 1)
        
        return self.draw_contours(edges,img_name)
    
    def draw_contours(self,img,img_name):
        output = {}
        font = cv2.FONT_HERSHEY_SIMPLEX
        img_list = []
        img2 = self.img.copy()
        num = 0

        contours, hierarchy = cv2.findContours(img, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

        for cnt in contours:
            if cv2.contourArea(cnt) > 2000:
                x, y, w, h = cv2.boundingRect(cnt)
                cv2.rectangle(img2, (x, y), (x + w, y + h), (0,255,0), 4)
                ROI = self.img[y:y+h, x:x+w]
                img_arr = {}
                num+=1
                img_arr["id"] = num
                img_arr["width"] = w
                img_arr["height"] = h


                colors = detect.ColorDetector(ROI).detect_colors()
                colors = sorted(colors)
                color_1 = colors[0][0]
                color_2 = colors[-1][0]

                img_arr["color_1"] = color_1
                img_arr["color_2"] = color_2

                img_arr["is_bold"] = False

                img_list.append(img_arr)
                cv2.putText(img2,str(num),(x-5,y+15), font, 2,(0,255,0),3)

        cv2.imwrite('./contours/'+img_name,img2)
        output["sub"] = img_list
        output["img"] = "./contours/"+img_name
        output["height"] = self.img.shape[0]
        output["width"] = self.img.shape[1]

        #return json.dumps(output)
        return output

   

      

        
       
       
             

   
       