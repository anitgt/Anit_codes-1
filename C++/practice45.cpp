#include <iostream>

using namespace std;

/*

int main() {

    int *pNum = NULL;

    pNum = new int;

    *pNum = 21;

    cout << "Address: " << pNum << '\n';
    cout << "value: " << *pNum << '\n';

    delete pNum;


    return 0;
}
*/

int main() {
    char *pGrades = NULL;
    int size;

    cout << "How many grades to allocate in?: ";
    cin >> size;


    pGrades = new char[size];

    for(int i = 0; i < size; i++) {
        cout << "Enter grade# " << i + 1 << " : "<< endl;
        cin >> pGrades[i];
    }

    for(int i =0; i <size; i++) {
        cout << "The grades are: " << pGrades[i] << endl;
    }

    delete[] pGrades;

    return 0;
}