// C++ program: Smallest integer

#include<iostream>
using namespace std;
int main()
{
	int l,m,n;
	cout<<"Enter the value of l = ";
	cin>>l;
	cout<<"Enter the value of m = ";
	cin>>m;
	cout<<"Enter the value of n = ";
	cin>>n;

	if(l<m && l<n)
	{
		cout<<l<<" is the smallest integer";
	}
	else if(m<l && m<n)
	{
		cout<<m<<" is the smallest integer";
	}
	else
	{
		cout<<n<<" is the smallest integer";
	}
}