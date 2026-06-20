// Java class: Profit loss

package projectFolder;

import java.util.Scanner;

public class ProfitLoss
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter the cost price = ");
        int cp = scan.nextInt();

        System.out.print("Enter the selling price = ");
        int sp = scan.nextInt();

        if (sp > cp)
        {
            System.out.println("There is profit");
        }
        else if (sp < cp)
        {
            System.out.println("There is loss");
        }
        else
        {
            System.out.println("There is no profit or loss");
        }
    }
}