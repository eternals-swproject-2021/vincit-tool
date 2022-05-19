import process
import cv2
import sys
import checktext


def main():
    if __name__== "__main__" :
           img = cv2.imread('./uploads/'+sys.argv[1])
           image_data =process.ImageProcess(img)
           #json_output = image_data.dilate_image(sys.argv[1])
           json_output = image_data.detect_text(sys.argv[1])
           return checktext.calculation(json_output)
           #return json_output

    
print(main())







