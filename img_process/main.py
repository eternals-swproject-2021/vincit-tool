import process
import cv2
import sys
import checktext


def main():
    if __name__== "__main__" :
           img = cv2.imread('./uploads/'+sys.argv[1])
           image_data =process.ImageProcess(img)
           json_output = image_data.detect_text(sys.argv[1])
           return checktext.calculation(json_output)
<<<<<<< HEAD
           #return json_output
=======
>>>>>>> 8ff4bc5739b9dd2856fe9060c51a53ecf824a317

    
print(main())







