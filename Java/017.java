// Java class: Bank account eligibility

package projectFolder;

import java.util.Scanner;

public class BankAccountEligibility
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter your age = ");
        int age = scan.nextInt();
        if (age >= 18)
        {
            System.out.println("You are eligible to open a bank account");
        }
        else
        {
            System.out.println("You are not eligible to open a bank account");
        }
    }
}