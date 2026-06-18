// Java class: Voting eligibility

package projectFolder;

import java.util.Scanner;

public class VotingEligibility
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);
        System.out.print("Enter your age = ");
        int age = scan.nextInt();
        if (age >= 18)
        {
            System.out.println("You are eligible to vote");
        }
        else
        {
            System.out.println("You are not eligible to vote");
        }
    }
}