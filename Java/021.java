// Java class: Even or odd or zero

package projectFolder;

import java.util.Scanner;

public class EvenOddZero
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter any integer = ");
        int num = scan.nextInt();

        if (num == 0)
        {
            System.out.println("The integer is zero");
        }
        else if (num % 2 == 0)
        {
            System.out.println("The integer is even");
        }
        else
        {
            System.out.println("The integer is odd");
        }
    }
}