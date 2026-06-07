// C++ program: Even, odd or zero integer

#include<iostream>
using namespace std;
int main()
{
	int y;
	cout<<"Enter an integer = ";
	cin>>y;

	if(y==0)
	{
		cout<<y<<" is zero";
	}
	else if(y%2==0)
	{
		cout<<y<<" is an even integer";
	}
	else
	{
		cout<<y<<" is an odd integer";
	}
}