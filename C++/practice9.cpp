#include <iostream>

int main() {

    int x = 5;
    int y = 10;

    double price = 2.99;

    int sum = x + y;

    int age = 29;

    char grade = 'A';
    char initial = 'B';
    char currency = '$';

    bool student = true;

    std::string name = "Anit";

    std::cout << x << '\n';
    std::cout << y << '\n';
    std::cout << sum << '\n';
    std::cout << price << '\n';
    std::cout << grade << '\n';
    std::cout << student <<'\n';
    std::cout << name << '\n';

    std::cout << "Hello " << name << '\n';
    std::cout << "You are " << age << " old" << '\n';
    return 0;
}