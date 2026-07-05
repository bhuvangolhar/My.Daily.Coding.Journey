# Python program: Time of rotation

hour = int(input("Enter the current hour (24 hr clock format): "))

if hour >= 6 and hour < 18:
    print("It is day")
else:
    print("It is night")