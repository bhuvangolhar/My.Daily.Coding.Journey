// Java class: Grade calculator

package projectFolder;

import java.util.Scanner;

public class GradeCalculator
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter the marks = ");
        int marks = scan.nextInt();

        if (marks >= 80)
        {
            System.out.println("Grade A");
        }
        else if (marks >= 60)
        {
            System.out.println("Grade B");
        }
        else if (marks >= 35)
        {
            System.out.println("Grade C");
        }
        else
        {
            System.out.println("Grade D");
        }
    }
}