import time
import calender

mytime=time.localtime(time.time())
print(mytime)
 
cal=calender.month(2018, 11)
print("here s the calender:")
print(cal)