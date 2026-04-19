#include <iostream>

using namespace std;

/*
class Human {
    public: 
        string name = "Rick";
        string occupation = "Scientist";
        int age = 29;

        void eat() {
            cout << "This person is eating! \n";
        }

        void drink() {
            cout << "This person is drinking! \n";
        }
        void sleep() {
            cout << "This person is sleeping! \n";
        }
};

int main() {

    Human human1;
    Human human2;

    // human1.name = "Anit";
    // human1.occupation = "Student";
    // human1.age = 21;

    // human1.name = "Morty";
    // human1.occupation = "Student";
    // human1.age = 26;

    cout << human1.name << endl;
    cout << human1.occupation << endl;
    cout << human1.age << endl;
    cout << human2.name << endl;
    cout << human2.occupation << endl;
    cout << human2.age << endl;

    // human2.eat();
    // human2.drink();
    // human2.sleep();


    return 0;
}
    */

class Car {
    public: 
        string make;
        string model;
        int year;
        string color;

        void accelerate() {
            cout << "You stepped on gas! \n";
        };
        void brake() {
            cout << "You applied breaks! \n";
        };
};

int main() {
    Car car1;
    Car car2;
    
    car1.make = "Hyundai";
    car1.model = "i 10";
    car1.year = 2013;
    car1.color = "White";

    car2.make = "Hyundai";
    car2.model = "Verna";
    car2.year = 2019;
    car2.color = "black";

    cout << car1.make << '\n';
    cout << car1.model << '\n';
    cout << car1.year << '\n';
    cout << car1.color << '\n';

    cout << car2.make << '\n';
    cout << car2.model << '\n';
    cout << car2.year << '\n';
    cout << car2.color << '\n';

    // car1.accelerate();
    // car1.brake();

    return 0;
}