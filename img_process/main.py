import process
import cv2
import sys

img = cv2.imread('./uploads/'+sys.argv[1])
image_data =process.ImageProcess(img)
image_data.dilate_image(sys.argv[1])





