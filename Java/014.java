// Java class: Pass fail

package projectFolder;

import java.util.Scanner;

public class PassFail
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter your marks = ");
        int marks = scan.nextInt();
        if (marks >= 35)
        {
            System.out.println("You have passed");
        }
        else
        {
            System.out.println("You have not passed");
        }
    }
}