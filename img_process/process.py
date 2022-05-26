import cv2
import numpy as np
import matplotlib.pyplot as plt
import detect
import pathlib
import pytesseract
from pytesseract import Output

class ImageProcess():

    def __init__(self, img):
        self.img = img

    def detect_text(self,img_name):
        font = cv2.FONT_HERSHEY_SIMPLEX
        output = {}
        num = 0
        img_list = []
        img2 = self.img.copy()

        mask = np.ones(self.img.shape[:2], np.uint8)
        img_gray =  cv2.cvtColor(self.img, cv2.COLOR_BGR2GRAY)
        img_gray = cv2.bitwise_and(img_gray,img_gray, mask=mask)
        img_gray = cv2.GaussianBlur(img_gray,(3,3),cv2.BORDER_DEFAULT)

        rect_kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (2,2))
        edges = cv2.Canny(img_gray,180,255)
        edges = cv2.dilate(edges, rect_kernel, iterations = 1)
        edges = cv2.erode(edges, rect_kernel, iterations = 1)

        results = pytesseract.image_to_data(edges, output_type=Output.DICT,config='--psm 3')
        escape = [" ","|","*","/","-",".","--","|","»","°","#",".","+"]

        for i in range(0, len(results["level"])):

            text = results["text"][i]
            conf = int(float(results["conf"][i]))

            if conf != -1 and len(text)>1 and text not in escape:
                num+=1
                # extract the bounding box coordinates
                # of the text region from  the current result
                x = results["left"][i]
                y = results["top"][i]
                w = results["width"][i]
                h = results["height"][i]
                ROI = self.img[y:y+h, x:x+w]
                img_arr = {}
                img_arr["id"] = num
                cv2.rectangle(img2,(x, y),(x + w, y + h),(0, 0, 255), 2)

                colors = detect.ColorDetector(ROI).detect_colors()
                colors = sorted(colors)
                color_1 = colors[0][0]
                color_2 = colors[-1][0]

                #add finding worst color contrast

                img_arr["color_1"] = color_1
                img_arr["color_2"] = color_2

                img_list.append(img_arr)
                cv2.putText(img2,str(num),(x,y-10), font, 1.2,(0,255,0),3)

        cv2.imwrite('./react-app/src/pages/contours/contour.png',img2)

        output["sub"] = img_list
        output["img"] = "./contours/contour.png"

        return output

   

      

        
       
       
             

   
       