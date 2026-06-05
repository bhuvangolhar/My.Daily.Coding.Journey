// C program: Count digits of an integer

#include<stdio.h>
int main()
{
	int n;
	printf("Enter an integer = ");
	scanf("%d",&n);

	if(n>=0 && n<=9)
	{
		printf("%d is a single-digit integer",n);
	}
	else if(n>=10 && n<=99)
	{
		printf("%d is a double-digit integer",n);
	}
	else if(n>=100 && n<=999)
	{
		printf("%d is a triple-digit integer",n);
	}
	else
	{
		printf("%d is an integer with four or more digits",n);
	}
}