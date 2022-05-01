import cv2
import numpy as np
import matplotlib.pyplot as plt
import base64
import detect
import json

class ImageProcess():

    def __init__(self, img):
        self.img = img

    def dilate_image(self):
        img = self.img
        mask = np.ones(img.shape[:2], np.uint8)
        img_gray =  cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
        img_gray = cv2.bitwise_and(img_gray,img_gray, mask=mask)
        ret,thresh = cv2.threshold(img_gray, 128, 255,cv2.THRESH_OTSU|cv2.THRESH_BINARY)
        rect_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (45,45))
        dilation = cv2.dilate(thresh,rect_kernel, iterations = 1)
        self.draw_contours(dilation)
    
    def draw_contours(self,dilation_img):
        contours, hierarchy = cv2.findContours(dilation_img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        output = {}
        font = cv2.FONT_HERSHEY_SIMPLEX
        img_list = []
        img2 = self.img.copy()
        num = 0
        for cnt in contours:
            if cv2.contourArea(cnt) > 0:
                x, y, w, h = cv2.boundingRect(cnt)
                cv2.rectangle(img2, (x, y), (x + w, y + h), (255,0,0), 2)
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

                img_list.append(img_arr)
                cv2.putText(img2,str(num),(x-5,y+45), font, 2,(0,255,0),3)

        cv2.imwrite('../contours/img2.png',img2)
        output["sub"] = img_list
        output["img"] = "../contours/img2.png"
        output["height"] = self.img.shape[0]
        output["width"] = self.img.shape[1]
        print(json.dumps(output))

        
       
       
             

   
       