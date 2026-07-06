# Python program: Finding leap year 

year = int(input("Enter any year: "))

if year > 0:

    if year % 400 == 0:
        print("This is a leap year")
    elif year % 100 == 0:
        print("This is not a leap year")
    elif year % 4 == 0:
        print("This is a leap year")
    else:
        print("This is not a leap year")

else:
    print("The given year is invalid")