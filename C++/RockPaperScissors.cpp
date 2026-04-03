#include <iostream>
#include <ctime>

char getUserChoice();
char getComputerChoice();
void showChoice(char choice);
void chooseWinner(char player, char computer);

int main() {
    char player;
    char computer;

    player = getUserChoice();
    std::cout << "Your choice is: " ;
    showChoice(player);

    computer = getComputerChoice();
    std::cout << "Computer choice is: ";
    showChoice(computer);

    chooseWinner(player, computer);

    return 0;
}


char getUserChoice() {
    char player;

    std::cout << "****Rock paper scissors Game**** \n";
    do {
    std::cout << "Choose r for rock \n";
    std::cout << "Choose p for paper \n";
    std::cout << "Choose s for scissors \n";
    std::cin >> player;
    } while (player != 'r' && player != 'p' && player != 's');
    
    return player;
}
char getComputerChoice() {
        srand(time(NULL));

        char compChoice = (rand() % 3) + 1;

        switch(compChoice) {
            case 1: return 'r';
            case 2: return 'p';
            case 3: return 's';
        }

        return 0;
        /*
        if(compChoice == 1) {
            return 'r';
        } else if (compChoice == 2) {
            return 'p';
        } else {
            return 's';
        }
        */
}
void showChoice(char choice) {
    switch(choice) {
        case 'r':  std::cout << "Rock \n";
                    break;
        case 'p': std::cout << "Paper \n";
                    break;
        case 's': std::cout << "Scissors \n";
                    break;
        default: std::cout << "Invalid choice! \n";
    }
}
void chooseWinner(char player, char computer) {
    if(player == computer) {
        std::cout << "It is a tie";
    } else if (player == 'r' && computer == 'p') {
        std::cout << "Computer wins!";
    } else if (player == 'p' && computer == 's') {
        std::cout << "Computer wins!";
    } else if(player == 's' && computer == 'r') {
        std::cout << "Computer wins!";
    } else {
        std::cout << "Player wins!";
    }
}       