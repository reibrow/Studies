from rembg import remove
from PIL import Image

url = Image.open('78573773'
'.jfif')
output = remove(url)
output.save('img1.png')