myfile=open("heloo.txt","w")
myfile.write("Icta calicut")
myfile.close()
print("file generated successfully")

myfile=open("heloo.txt","r")
s=myfile.read()
print(s)
myfile.close()
