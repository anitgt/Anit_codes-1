#include <iostream>

using namespace std;

void printPattern(int n) {
      for(int i = 0; i <= n; i++) {
        for(int j = 0; j <= n; j++) {
            cout << "* ";
        };
        cout << endl;
    }
};

void printPattern2(int n) {
    for(int i =0 ; i < n; i++) {
        for(int j =0; j <= i; j++) {
            cout << "*";
        };
        cout << endl;;
    }
};

void printPattern3(int n) {
    for(int i = 1; i <= n; i++) {
        for(int j=1; j<=i; j++) {
            cout << j << " ";
        };
        cout << endl;
    };
}

int main() {
    int t;
    cout << "Enter test case no: ";
    cin >> t;
    for(int i=0; i<t ;i++) {
    int n;
    cout << "Enter a input number for pattern: ";
    cin >> n;
    printPattern3(n);
    }
}