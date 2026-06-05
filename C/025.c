// C program: Divisibility test

#include<stdio.h>
int main()
{
	int m;
	printf("Enter an integer = ");
	scanf("%d",&m);

	if(m%4==0 && m%6==0)
	{
		printf("%d is divisible by both integers",m);
	}
	else if(m%4==0)
	{
		printf("%d is divisible by 4 only",m);
	}
	else if(m%6==0)
	{
		printf("%d is divisible by 6 only",m);
	}
	else
	{
		printf("%d is not divisible any integer",m);
	}
}