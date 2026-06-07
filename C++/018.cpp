// C++ program: Divisible by 3

#include<iostream>
using namespace std;
int main()
{
	int a;
	cout<<"Enter an integer = ";
	cin>>a;

	if(a%3==0)
	{
		cout<<a<<" is divisible by 3";
	}
	else
	{
		cout<<a<<" is not divisible by 3";
	}
}