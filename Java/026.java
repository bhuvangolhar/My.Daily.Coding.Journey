// Java class: Divisibility test

package projectFolder;

import java.util.Scanner;

public class DivisibilityTest
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter any integer = ");
        int num = scan.nextInt();

        if (num % 5 == 0 && num % 10 == 0)
        {
            System.out.println("The integer is divisible by both 5 and 10");
        }
        else if (num % 5 == 0)
        {
            System.out.println("The integer is divisible by 5 only");
        }
        else if (num % 10 == 0)
        {
            System.out.println("The integer is divisible by 10 only");
        }
        else
        {
            System.out.println("The integer is not divisible by neither 5 nor 10");
        }
    }
}