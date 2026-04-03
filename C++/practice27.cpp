#include <iostream>

int myNum = 3;

void printNum();

int main() {
    int myNum = 1;
    printNum();
    std::cout << myNum << '\n';

    return 0;
}

void printNum() {
    int myNum = 4;
    std::cout << ::myNum << '\n';
}