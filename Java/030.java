// Java class: Arithmetic operations

package projectFolder;

import java.util.Scanner;

public class ArithmeticOperations
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        System.out.print("Enter the first integer = ");
        int a = scan.nextInt();

        System.out.print("Enter the second integer = ");
        int b = scan.nextInt();

        System.out.print("Enter any basic operator = ");
        char op = scan.next().charAt(0);

        switch (op)
        {
            case '+':
                System.out.println("Addition = " + (a + b));
                break;

            case '-':
                System.out.println("Subtraction = " + (a - b));
                break;

            case '*':
                System.out.println("Multiplication = " + (a * b));
                break;

            case '/':
                System.out.println("Division = " + (a / b));
                break;

            default:
                System.out.println("Invalid operator");
        }
    }
}