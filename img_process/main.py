import process
import cv2
import sys


def main():
    if __name__== "__main__" :
           img = cv2.imread('./uploads/'+sys.argv[1])
           image_data =process.ImageProcess(img)
           json_output = image_data.dilate_image(sys.argv[1])
           return json_output

    
print(main())







