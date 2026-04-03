#include <iostream>
#include <ctime>

int main() {
    srand(time(0));
    int randNum = (rand() % 5) + 1;
    
    switch(randNum) {
        case 1: std::cout << "You win laptop! \n";
                break;
        case 2: std::cout << "You win phone! \n";
                break;
        case 3: std::cout << "You win tab! \n";
                break;
        case 4: std::cout << "You win money! \n";
                break;
        case 5: std::cout << "You win napkins! \n";
                break;
    }

    return 0;
}