#include <iostream>

using namespace std;


int main() {
    const int   SIZE = 99;

    string foods[SIZE] = {};

    fill(foods, foods + SIZE/3, "Pizza");
    fill(foods + (SIZE/3), foods + (SIZE/3)*2, "Hamburgers");
    fill(foods + (SIZE/3)*2, foods + (SIZE), "Hotdogs");

    for(string food : foods) {
        cout << food << " \n" ;
    }

    return 0;
}