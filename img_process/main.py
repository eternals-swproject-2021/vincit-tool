import process
import cv2

img = cv2.imread('../uploads/img2.png')

image_data =process.ImageProcess(img)
X = image_data.dilate_image()




