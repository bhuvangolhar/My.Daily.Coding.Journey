// Java class: Smallest integer

package projectFolder;

import java.util.Scanner;

public class SmallestInteger
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter the first integer = ");
        int x = scan.nextInt();

        System.out.print("Enter the second integer = ");
        int y = scan.nextInt();

        System.out.print("Enter the third integer = ");
        int z = scan.nextInt();

        if (x < y && x < z)
        {
            System.out.println(x + " is the smallest integer");
        }
        else if (y < x && y < z)
        {
            System.out.println(y + " is the smallest integer");
        }
        else
        {
            System.out.println(z + " is the smallest integer");
        }
    }
}