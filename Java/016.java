// Java class: Divisible by five

package projectFolder;

import java.util.Scanner;

public class DivisibleByFive
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter any integer = ");
        int num = scan.nextInt();
        if (num % 5 == 0)
        {
            System.out.println("The integer is divisible by 5");
        }
        else
        {
            System.out.println("The integer is not divisible by 5");
        }
    }
}