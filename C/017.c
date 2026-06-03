// C program: Positive or negative

#include<stdio.h>
int main()
{
	int y;
	printf("Enter an integer = ");
	scanf("%d",&y);

	if(y>=0)
	{
		printf("%d is positive",y);
	}
	else
	{
		printf("%d is negative",y);
	}
}