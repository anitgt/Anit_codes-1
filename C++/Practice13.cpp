#include <iostream>

int main() {
     
    double temp;
    char unit;

    std::cout << "*************** Temperature conversion ************** \n";
    
    std::cout << "F = Fahrenheit\n";
    std::cout << "c = Celsius \n";
    std::cout << "What unit would you like to convert to: ";
    std::cin >> unit;

    if(unit == 'F' || unit == 'f') {
        std::cout << "Enter the temp is celsius: ";
        std::cin >> temp;

        temp = (1.8 * temp) *32;
        std::cout << "Temperature is: " << temp << "F\n";

    }
    else if(unit == 'C' || unit == 'c') {
        std::cout << "Enter the temp in fehrenheit: ";
        std:: cin >> temp;

        temp = (temp -32) /1.8;

        std::cout << "Temperature is: " << temp << "C\n"; 
    }
    else {
        std::cout << "Please enter valid unit";
    }

    
    
    std::cout << "*************** Temperature conversion ************** \n";



    return 0;
}