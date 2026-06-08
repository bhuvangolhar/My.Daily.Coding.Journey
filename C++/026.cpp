// C++ program: Character identity

#include<iostream>
using namespace std;
int main()
{
	char ch;
	cout<<"Enter any character = ";
	cin>>ch;

	if(ch>='A' && ch<='Z')
	{
		cout<<ch<<" is an uppercase alphabet";
	}
	else if(ch>='a' && ch<='z')
	{
		cout<<ch<<" is a lowercase alphabet";
	}
	else if(ch>='0' && ch<='9')
	{
		cout<<ch<<" is a numerical digit";
	}
	else
	{
		cout<<ch<<" is a special character";
	}
}