// C program: Greatest integer

#include<stdio.h>
int main()
{
	int a,b,c;
	printf("Enter the first integer = ");
	scanf("%d",&a);
	printf("Enter the second integer = ");
	scanf("%d",&b);
	printf("Enter the third integer = ");
	scanf("%d",&c);

	if(a>b && a>c)
	{
		printf("%d is the greatest integer",a);
	}
	else if(b>a && b>c)
	{
		printf("%d is the greatest integer",b);
	}
	else
	{
		printf("%d is the greatest integer",c);
	}
}