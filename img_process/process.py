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
        #binary and inv threshold to select the best one
        binary_ret,binary_thresh = cv2.threshold(img_gray, 180, 255,cv2.THRESH_OTSU+cv2.THRESH_BINARY)
        binary_inv_ret,binary_inv_thresh = cv2.threshold(img_gray, 180, 255,cv2.THRESH_OTSU+cv2.THRESH_BINARY_INV)
        #morph rectangle
        rect_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (35,35))
        #dialte images
        binary_dilation = cv2.dilate(binary_thresh,rect_kernel, iterations = 1)
        binary_inv_dilation = cv2.dilate(binary_inv_thresh,rect_kernel, iterations = 1)
        self.draw_contours(binary_dilation,binary_inv_dilation,img_name)
    
    def draw_contours(self,binary_dilation_img,binary_inv_dilation_img,img_name):
        binary_contours, binary_hierarchy = cv2.findContours(binary_dilation_img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
        binary_inv_contours, binary_inv_hierarchy = cv2.findContours(binary_inv_dilation_img, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
       
        output = {}
        font = cv2.FONT_HERSHEY_SIMPLEX
        img_list = []
        img2 = self.img.copy()
        num = 0

        #check for the most suitable threshold contours type
        if len(binary_contours) >= len(binary_inv_contours):
            contours = binary_contours
        else:
            contours = binary_inv_contours

        for cnt in contours:
            if cv2.contourArea(cnt) > 0:
                x, y, w, h = cv2.boundingRect(cnt)
                cv2.rectangle(img2, (x, y), (x + w, y + h), (0,0,255), 4)
                ROI = self.img[y:y+h, x:x+w]
                img_arr = {}
                num+=1
                img_arr["id"] = num
                img_arr["width"] = w
                img_arr["height"] = h

                colors = detect.ColorDetector(ROI).detect_colors()
                print(num)
                print(colors)
                colors = sorted(colors)
                color_1 = colors[0][0]
                color_2 = colors[-1][0]

                img_arr["color_1"] = color_1
                img_arr["color_2"] = color_2

                img_list.append(img_arr)
                cv2.putText(img2,str(num),(x-5,y+45), font, 2,(0,255,0),3)

        cv2.imwrite('./contours/'+img_name,img2)
        output["sub"] = img_list
        output["img"] = "./contours/"+img_name
        output["height"] = self.img.shape[0]
        output["width"] = self.img.shape[1]
        print(json.dumps(output))

        
       
       
             

   
       