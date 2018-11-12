def add(x,y):
    z=x+y
    return z

a=10
b=24
result=add(a,b)
print(result)


def reverse(n):
rev=0
rem=0
while(n>0):
    rem=num%10
    rev=rev*10+rem
    num=num//10

return rev
   num=int(input("number is"))
   result=reverse(num)
   print(result)

