// C program: Equal integers

#include<stdio.h>
int main()
{
	int a,b;
	printf("Enter the first integer = ");
	scanf("%d",&a);
	printf("Enter the second integer = ");
	scanf("%d",&b);

	if(a==b)
	{
		printf("Both integers are equal");
	}
	else
	{
		printf("The integers are not equal");
	}
}