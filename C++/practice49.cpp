#include <iostream>
using namespace std;

struct student {
    string name;
    double gpa;
    bool enrolled = true;
};

int main() {

    student student1;
    student1.name = "Anit";
    student1.gpa = 3.4;

    student student2;
    student2.name = "Spongebob";
    student2.gpa = 2.3;
    student2.enrolled = true;

    student student3;
    student3.name = "Patrick";
    student3.gpa = 3;
    student3.enrolled = false;

    cout << student1.name << endl;
    cout << student1.gpa << endl;
    cout << student1.enrolled << endl;

    cout << student2.name << endl;
    cout << student2.gpa << endl;
    cout << student2.enrolled << endl;

    cout << student3.name << endl;
    cout << student3.gpa << endl;
    cout << student3.enrolled << endl;
    return 0;
}