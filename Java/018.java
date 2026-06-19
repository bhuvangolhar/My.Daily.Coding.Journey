// Java class: Divisible by five and ten

package projectFolder;

import java.util.Scanner;

public class DivisibleByFiveAndTen
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
        else
        {
            System.out.println("The integer is not divisible by both 5 and 10");
        }
    }
}