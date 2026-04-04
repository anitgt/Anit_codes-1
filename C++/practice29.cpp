#include <iostream>

int main() {
    std::string name = "Anit";
    double gpa = 2.4;
    char grade = 'F';
    bool student = true;
    char grades[] = {'A', 'B', 'C', 'D', 'F'};
    std::string students[] = {"Alex", "Hardeep", "Aman", "Spongebob"};

    
    //std::cout << sizeof(grades) / sizeof(char) << " elements \n";
    std::cout << sizeof(students)/sizeof(std::string)<< " elements \n";
    return 0;
}