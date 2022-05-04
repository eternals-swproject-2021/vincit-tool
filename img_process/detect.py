from collections import Counter

class ColorDetector():
    def __init__(self, img):
        self.img = img
        self.manual_count = {}
        self.w, self.h, self.channels = self.img.shape
        self.total_pixels = self.w*self.h

    def count(self):
        for y in range(0, self.h):
            for x in range(0, self.w):
                RGB = (int(self.img[x, y, 2]), int(self.img[x, y, 1]), int(self.img[x, y, 0]))
                if RGB in self.manual_count:
                      self.manual_count[RGB] += 1
                else:
                      
                      self.manual_count[RGB] = 1
          

    def most_common(self):
        arr = []
        self.count()
        self.number_counter = Counter(self.manual_count).most_common(10)
        for rgb in self.number_counter:
            arr.append(rgb)
    
        return arr

    def detect_colors(self):
        arr = self.most_common()
        return arr

   
