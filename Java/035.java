// Java class: Traffic signal

package projectFolder;

import java.util.Scanner;

public class TrafficSignal
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter a signal character (R, Y, G) = ");
        char signal = scan.next().charAt(0);

        switch (signal)
        {
            case 'R':
                System.out.println("Stop");
                break;

            case 'Y':
                System.out.println("Wait");
                break;

            case 'G':
                System.out.println("Go");
                break;

            default:
                System.out.println("Invalid input");
        }
    }
}