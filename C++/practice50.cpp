#include <iostream>

using namespace std;

struct Car {
    string model;
    int year;
    string color;
};

void printCar(Car &car);
void paintCar(Car &car, string color);

int main() {
    Car car1;
    Car car2;

    car1.model = "Mustang";
    car1.year = 2005;
    car1.color = "White";

    car2.model = "Corvette";
    car2.year = 2006;
    car2.color = "Red";


    paintCar(car1, "Black");
    paintCar(car2, "Gold");

    printCar(car1);
    printCar(car2);


    // cout << &car1 << endl;
    return 0;
}

void printCar(Car &car) {
    cout << car.model << endl;
    cout << car.year << endl;
    cout << car.color << endl;
    // cout << &car << endl;
}
void paintCar(Car &car, string color) {
    car.color = color;
}