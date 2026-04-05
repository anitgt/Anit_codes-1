#include <iostream>

using namespace std;

int main() {

    string cars[][3] = {{"Mustang", "Escape", "F-150"},
                        {"Corvette", "Equinox", "Silverado"},
                        {"CHallanger", "Charger", "Ram"}};
    /*
    cout << cars[0][0] << " ";
    cout << cars[0][1] << " ";
    cout << cars[0][2] << " \n";
    cout << cars[1][0] << " ";
    cout << cars[1][1] << " ";
    cout << cars[1][2] << " \n";
    cout << cars[2][0] << " ";
    cout << cars[2][1] << " ";
    cout << cars[2][2] << " \n";
    */
    int rows = sizeof(cars)/sizeof(cars[0]);
    int columns = sizeof(cars[0])/sizeof(cars[0][0]);
    
    for(int i = 0; i < rows; i++) {
        for(int j =0; j < columns; j++) {
            cout << cars[i][j] << " ";
        };
        cout << '\n';
    }

    return 0;
}