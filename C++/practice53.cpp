#include <iostream>

using namespace std;

// class Student {
//     public:
//         string name;
//         int age;
//         double gpa;

//     Student(string name, int age, double gpa) {
//         this->name = name;
//         this->age = age;
//         this->gpa = gpa;
//     }
// };

class Car {
    public:
        string make;
        string model;
        int year;
        string engineType;

    Car(string make, string model, int year, string engineType) {
        this->make = make;
        this->model = model;
        this->year = year;
        this->engineType = engineType;
    }
};

int main() {

    // Student student1("Anit", 21, 3.4);
    // Student student2("Sandy", 21, 2.4);
    // Student student3("Patrick", 36, 4.3);

    // cout << student1.name << endl;
    // cout << student1.age << endl;
    // cout << student1.gpa << endl;

    // cout << student2.name << endl;
    // cout << student2.age << endl;
    // cout << student2.gpa << endl;
    
    // cout << student3.name << endl;
    // cout << student3.age << endl;
    // cout << student3.gpa << endl;

    Car car1("Toyota", "Hylux", 2009, "Diesel");

    cout << car1.make << endl;
    cout << car1.model << endl;
    cout << car1.year << endl;
    cout << car1.engineType << endl;
    return 0;
}