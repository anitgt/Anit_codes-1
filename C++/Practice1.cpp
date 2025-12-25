#include <iostream>

namespace first{
    int x = 0;
}

namespace second{
    int x = 2;
}

int main() {
    using std::cout;
    using std::string;

    //int x = 1;

    string name = "bro";

    cout << name;

    return 0;
}