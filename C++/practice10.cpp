#include <iostream>

int main() {
    char op;
    double num1;
    double num2;
    double result;

    std::cout << "********* CALCULATOR ********* " << '\n';

    std::cout << "Enter either (+ , - , * , /): " ;
    std::cin >> op;

    std::cout << "Enter #1: ";
    std::cin >> num1;

    std::cout << "Enter #2: ";
    std::cin >> num2;

    if(op == '+') {
        result = num1 + num2;
    } else if (op == '-') {
        result = num1 - num2;
    } else if (op == '*') {
        result = num1 * num2;
    } else if (op == '/') {
        result = num1 /num2;
    } else {
        std::cout << "Wrong input!";
    };

    std::cout << "result: " << result << '\n';

    std::cout << "*****************************************";


    return 0;
}