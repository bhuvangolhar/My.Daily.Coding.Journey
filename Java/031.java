// Java class: Season of year

package projectFolder;

import java.util.Scanner;

public class SeasonOfYear
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter any month in number from 1 to 12 = ");
        int month = scan.nextInt();

        switch (month)
        {
            case 12:
            case 1:
            case 2:
                System.out.println("It is Winter");
                break;

            case 3:
            case 4:
            case 5:
                System.out.println("It is Summer");
                break;

            case 6:
            case 7:
            case 8:
                System.out.println("It is Monsoon");
                break;

            case 9:
            case 10:
            case 11:
                System.out.println("It is Autumn");
                break;

            default:
                System.out.println("Invalid month");
        }
    }
}