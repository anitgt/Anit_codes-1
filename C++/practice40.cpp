#include <iostream>

using namespace std;

void swap(string &val1, string &val2);

int main() {

    string x = "Kool-aid";
    string y = "Water";
    
    swap(x, y);   

    cout << "X: " << x << '\n';
    cout << "Y: " << y << '\n';

    return 0;
}

void swap(string &val1, string &val2) {
    string temp;

    temp = val1;
    val1 = val2;
    val2 = temp;
}