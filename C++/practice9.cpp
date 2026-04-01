#include <iostream>

int main() {
    // int month;

    // std::cout << "Enter month (1-12): ";
    // std::cin >> month;

    // switch(month) {
    //     case 1:
    //         std::cout << "It is january";
    //         break;
    //     case 2: 
    //         std::cout << "It is february";
    //         break;
    //     case 3: 
    //         std::cout << "It is march";
    //         break;
    //     case 4: 
    //         std::cout << "It is april";
    //         break;
    //     case 5:
    //         std::cout << "It is may";
    //         break;
    //     case 6:
    //         std::cout << "It is june";
    //         break;
    //     default:
    //         std::cout << "Invalid operation!";
    // }

    char grade;
    std::cout << "What letter grade?";
    std::cin >> grade;

    switch(grade) {
        case 'A':
            std::cout << "You did Great!";
            break;
        case 'B': 
            std::cout << "You did Average";
            break;
        case 'C': 
            std::cout << "You almost passed!";
            break;
        case 'D':
            std::cout << "Better luck next time!";
            break;
        default: 
            std::cout << "Wrong Grade!";
    }


    return 0;
}