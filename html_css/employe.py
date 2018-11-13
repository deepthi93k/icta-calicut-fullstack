class Employe:
    def __init__(self,x,y,s,c):
        self.name=x
        self.age=y
        self.salary=s
        self.code=c

    def printData(self):
        print("name is",self.name)
        print("age is",self.age)
        print("salary is",self.salary)
        print("code is",self.code)

x=input("enter name")        
y=int(input("enter age"))       
s=int(input("enter salary"))
c=int(input("enter code"))
e=Employe(x,y,s,c)

e.printData()

