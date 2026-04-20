#include <iostream>

using namespace std;

class Pizza {
    public:
        string topping1;
        string topping2;

    Pizza(string topping1) {
        this->topping1 = topping1;
    }

    Pizza(string topping1, string topping2) {
        this-> topping1 = topping1;
        this-> topping2 = topping2;
    }

    Pizza() {
        
    }
};

int main() {

    Pizza pizza1("Pepperoni");
    Pizza pizza2("Mushroom", "Pepperoni");
    Pizza pizza3;

    // cout << pizza1.topping1 << endl;
    // cout << pizza2.topping1 << endl;
    // cout << pizza2.topping2 << endl;

    return 0;
}