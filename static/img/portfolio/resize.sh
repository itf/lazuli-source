#!/bin/bash
#mogrify -path ./thumb -resize 75x50 -strip -interlace Plane -gaussian-blur 0.05 -quality 15 -compress Group4 -format jpg *.jpg
 
mogrify -path ./smaller  -strip -interlace Plane  -quality 75  -format jpg *.jpg
