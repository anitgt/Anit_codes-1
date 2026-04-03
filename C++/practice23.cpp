#include <iostream>
void happyBirthday(std::string name, int age);


int main() {
    std::string name = "Anit";
    int age = 21;
    
    happyBirthday(name, age);
    return 0;
}

void happyBirthday(std::string name, int age) {
    std::cout << "Happy birthday to " << name << " You are now " << age << " Years old"<<"\n";
    std::cout << "Happy birthday to you! \n";
    std::cout << "Happy birthday to you! \n";
    std::cout << "Happy birthday to you! \n \n";
}
