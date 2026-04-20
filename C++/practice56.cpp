#include <iostream>

using namespace std;

class Animal {
    public:
    bool alive = true;

    void eat() {
        cout << "This animal is eating \n";
    }
};

class Cat : public Animal {
    public: 
        void meow() {
            cout << "The cat goes meow! \n";
        }
};

class Dog : public Animal {
    public:
        void bark() {
            cout << "The dog goes woof! \n";
        }
};

int main() {
    Dog dog1;
    Cat cat1;

    dog1.eat();
    cout << dog1.alive << endl;
    dog1.bark();

    cout << cat1.alive << endl;
    cat1.meow();
    //cat1.bark();


    return 0;
}