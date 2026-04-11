#include <iostream>

using namespace std;

void printInfo(string name,const int &age);

int main() {
    string name = "Anit";
    int age = 21;

    printInfo(name, age);

    return 0;
}

void printInfo(string name,const int &age) {
    age = 0;

    cout << name << " You are " << age << " Years Old";
}