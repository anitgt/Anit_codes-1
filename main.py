num=int(input("Enter a number: "))


if (num==0):
    print("Factorial is 1")

if (num<0):
    print("Please enter a valid value!")

if (num>0):
    Factorial=1

for i in range(1, num+1):
    Factorial=Factorial*1

print("Factorial=",Factorial)