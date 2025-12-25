#include <iostream>

int main(){

    int age;

    std::cout << "Enter Your Age: ";
    std::cin >> age;

    if(age >= 100) {
        std::cout << "You are not alive";
    }
    else if(age >= 18) {
        std::cout << "You can enter!";
    } else if(age <= 0) {
        std::cout << "How are u even alive? ";
    } 
     else {
        std::cout << "You cannot enter!";
    }

    return 0;
}