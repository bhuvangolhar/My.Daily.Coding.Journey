// C program: Positive, negative or zero integer

#include<stdio.h>
int main()
{
	int y;
	printf("Enter an integer = ");
	scanf("%d",&y);

	if(y>0)
	{
		printf("%d is a positive integer",y);
	}
	else if(y<0)
	{
		printf("%d is a negative integer",y);
	}
	else
	{
		printf("%d is zero",y);
	}
}