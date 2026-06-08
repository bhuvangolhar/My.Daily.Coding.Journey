// C++ program: Count digits of an integer

#include<iostream>
using namespace std;
int main()
{
	int n;
	cout<<"Enter any integer = ";
	cin>>n;

	if(n>=0 && n<=9)
	{
		cout<<n<<" is a single-digit integer";
	}
	else if(n>=10 && n<=99)
	{
		cout<<n<<" is a double-digit integer";
	}
	else if(n>=100 && n<=999)
	{
		cout<<n<<" is a triple-digit integer";
	}
	else
	{
		cout<<n<<" is larger than a triple-digit integer";
	}
}