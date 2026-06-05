// C program: Even, odd or zero integer

#include<stdio.h>
int main()
{
	int x;
	printf("Enter an integer = ");
	scanf("%d",&x);

	if(x==0)
	{
		printf("%d is zero",x);
	}
	else if(x%2==0)
	{
		printf("%d is an even integer",x);
	}
	else
	{
		printf("%d is an odd integer",x);
	}
}