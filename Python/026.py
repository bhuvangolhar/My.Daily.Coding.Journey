# Python program: Profit, loss or none

cp = int(input("Enter the cost price: "))
sp = int(input("Enter the selling price: "))

if sp > cp:
    print("There is profit in the transaction.")
elif sp < cp:
    print("There is loss in the transaction.")
else:
    print("The venture yielded zero net returns.")