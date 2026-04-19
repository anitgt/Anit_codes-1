#include <iostream>

enum Day{sunday = 0, monday = 1, tuesday = 2, wednesday = 3, thursday = 4, friday = 5, saturday = 6};

enum Colors {Red, Blue, Violet, Green, White, Purple};

using namespace std;

int main() {
    Day today = friday;

    switch(today) {
        case sunday : cout << "Today is sunday!\n";
                        break;
        case monday : cout << "Today is monday!\n";
                        break;
        case tuesday : cout << "Today is Tuesday!\n";
                        break;
        case wednesday : cout << "Today is wednesday!\n";
                        break;
        case thursday : cout << "Today is Thursday!\n";
                        break;
        case friday : cout << "Today is Friday!\n";
                        break;
        case saturday : cout << "Today is saturday!\n";
                        break;
    }

    return 0;
}