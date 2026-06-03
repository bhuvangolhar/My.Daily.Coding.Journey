// C program: Smaller integer

#include<stdio.h>
int main()
{
	int a,b;
	printf("Enter the first integer = ");
	scanf("%d",&a);
	printf("Enter the second integer = ");
	scanf("%d",&b);

	if(a<b)
	{
		printf("%d is the smaller integer",a);
	}
	else
	{
		printf("%d is the smaller integer",b);
	}
}