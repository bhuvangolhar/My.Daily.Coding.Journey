// Java class: Divisible by four or eight

package projectFolder;

import java.util.Scanner;

public class DivisibleByFourOrEight
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter any integer = ");
        int num = scan.nextInt();
        if (num % 4 == 0 || num % 8 == 0)
        {
            System.out.println("The integer is divisible by either 4 or 8");
        }
        else
        {
            System.out.println("The integer is divisible by neither 4 nor 8");
        }
    }
}