#include <iostream>
#include <ctime>

int main() {
    int num;
    int guess;
    int tried = 0;

    srand(time(NULL));
    num = (rand() % 100) + 1;
    
    std::cout << "********Guessing Game ********** \n";

    do{
        std::cout << "Enter a guess(1-100): ";
        std::cin >> guess;
        tried++;

        if(guess > num) {
            std::cout << "Too High \n";
        } else if (guess < num) {
            std::cout << "Too low! \n";
        } else {
            std::cout << "You won! #no of tries: " << tried << '\n';
        }
    } while (guess != num);

    std::cout << "*******Game Over*********";

    return 0;
}