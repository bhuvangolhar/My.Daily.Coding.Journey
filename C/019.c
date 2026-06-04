// C program: Divisible by 5 and 8

#include<stdio.h>
int main()
{
	int b;
	printf("Enter an integer = ");
	scanf("%d",&b);

	if(b%5==0 && b%8==0)
	{
		printf("%d is divisible by both 5 and 8",b);
	}
	else
	{
		printf("%d is not divisible by both 5 and 8",b);
	}
}