#include <iostream>

using namespace std;

int main() {
    string name = "Anit";
    int age = 21;
    string freePizza[5] = {"Pizza1", "Pizza2", "Pizza3", "Pizza4", "Pizza5"};

    string *pName = &name;
    int *pAge = &age;
    string *pFreePizza = freePizza;

    cout << *pName << '\n';
    cout << *pAge << '\n';
    cout << *freePizza << '\n';

    return 0;
}