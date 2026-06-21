// Java class: Type of triangle

package projectFolder;

import java.util.Scanner;

public class TypeOfTriangle
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter the number of equal sides of a triangle = ");
        int type = scan.nextInt();

        switch (type)
        {
            case 1:
                System.out.println("Scalene Triangle");
                break;

            case 2:
                System.out.println("Isosceles Triangle");
                break;

            case 3:
                System.out.println("Equilateral Triangle");
                break;

            default:
                System.out.println("A triangle don't have more than 3 sides");
        }
    }
}