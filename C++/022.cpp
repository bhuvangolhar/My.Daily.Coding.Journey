// C++ program: Positive, negative or zero integer

#include<iostream>
using namespace std;
int main()
{
	int x;
	cout<<"Enter an integer = ";
	cin>>x;

	if(x>0)
	{
		cout<<x<<" is a positive integer";
	}
	else if(x<0)
	{
		cout<<x<<" is a negative integer";
	}
	else
	{
		cout<<x<<" is zero";
	}
}