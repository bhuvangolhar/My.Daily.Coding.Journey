// C program: Divisible by 5

#include<stdio.h>
int main()
{
	int a;
	printf("Enter an integer = ");
	scanf("%d",&a);

	if(a%5==0)
	{
		printf("%d is divisible by 5",a);
	}
	else
	{
		printf("%d is not divisible by 5",a);
	}
}