// C++ program: Divisible by 3 and 7

#include<iostream>
using namespace std;
int main()
{
	int b;
	cout<<"Enter an integer = ";
	cin>>b;

	if(b%3==0 && b%7==0)
	{
		cout<<b<<" is divisible by both 3 and 7";
	}
	else
	{
		cout<<b<<" is not divisible by both 3 and 7";
	}
}