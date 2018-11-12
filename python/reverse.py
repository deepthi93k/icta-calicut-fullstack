num=int(input("Enter a number"))
rev=0
while(num>0):
    rem=num%10
    rev=rev*10+rem
    num=num//10
print(rev)

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

