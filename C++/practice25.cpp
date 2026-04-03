#include <iostream>

std::string addname(std::string firstname, std::string lastname);

int main() {
    std::string firstname = "Anit";
    std::string lastname = "Sarkar";
    std::string fullname = addname(firstname, lastname);

    std::cout << fullname;

    return 0;
}

std::string addname(std::string firstname, std::string lastname) {
    std::string fulln = firstname + " " + lastname;
    return fulln;
}