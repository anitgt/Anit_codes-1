#include <iostream>

using namespace std;

int factorial(int num);

int main() {
    
    cout << factorial(20);

    return 0;
}
//iterative approach

// int factorial(int num) {
//     int result = 1;

//     for(int i = 1; i <= num; i++) {
//         result = result * i;
//     };
//     return result;
// }

//Recursive approach

int factorial(int num) {
    if(num > 1) {
        return num * factorial(num-1);
    } else {
        return 1;
    };
};