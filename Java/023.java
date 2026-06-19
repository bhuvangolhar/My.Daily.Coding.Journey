// Java class: Leap year

package projectFolder;

import java.util.Scanner;

public class LeapYear
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter any year = ");
        int year = scan.nextInt();

        if (year < 1)
        {
            System.out.println("The given year is invalid");
        }
        else if (year % 4 == 0)
        {
            System.out.println("This is a leap year");
        }
        else
        {
            System.out.println("This is not a leap year");
        }
    }
}