// C++ program: Divisibility test

#include<iostream>
using namespace std;
int main()
{
	int x;
	cout<<"Enter an integer = ";
	cin>>x;

	if(x%3==0 && x%5==0)
	{
		cout<<x<<" is divisible by both 3 and 5";
	}
	else if(x%3==0)
	{
		cout<<x<<" is divisible by 3 only";
	}
	else if(x%5==0)
	{
		cout<<x<<" is divisible by 5 only";
	}
	else
	{
		cout<<x<<" is neither divisible by 3 nor 5";
	}
}