#include <iostream>

using namespace std;

void walk(int steps);


int main() {

    walk(100);

    return 0;
}

//iterative approach:

// void walk(int steps) {
//     for(int i =0; i < steps; i++) {
//         cout << "You took a step" << endl;
//     }
// }

//recursive approach:
void walk(int steps) {
    if(steps > 0) {
        cout << "You took a step" << endl;
        walk(steps -1);
    }
}