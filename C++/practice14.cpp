#include <iostream>

int main() {

    std::string name;

    std::cout << "Enter a name: ";
    std::getline(std::cin, name);

    // if(name.length() > 12) {
    //     std::cout << "Name is greater than 12 letters";
    // }
    // else {
    //     std::cout << "Welcome!";
    // }

    // if(name.empty()) {
    //     std::cout << "Name cannot be empty";
    // }
    // else {
    // std::cout << "Welcome";
    // }

    // name.clear();

    // std::cout << "Hello" << name;

    // name.append("@gmail.com");

    // std::cout << "email is: " << name;

    // std::cout << name.at(0);

    // name.insert(0, "@");

    // std::cout << "Enter: " << name;

    // std::cout << name.find(' ');

    name.erase(0,3);

    std::cout << name;

    return 0;
}