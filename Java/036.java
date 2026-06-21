// Java class: Restaurant menu

package projectFolder;

import java.util.Scanner;

public class RestaurantMenu
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a menu number from 1 to 4 = ");
        int item = scan.nextInt();

        switch (item)
        {
            case 1:
                System.out.println("You ordered a Pizza");
                break;

            case 2:
                System.out.println("You ordered a Burger");
                break;

            case 3:
                System.out.println("You ordered a Sandwich");
                break;

            case 4:
                System.out.println("You ordered a Pasta");
                break;

            default:
                System.out.println("This order doesn't exist");
        }
    }
}