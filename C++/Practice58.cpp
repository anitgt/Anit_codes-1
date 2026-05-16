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

void printPattern4(int n) {
    for(int i =1; i <=n; i++) {
        for(int j=1; j <=i; j++) {
            cout << i << " ";
        };
        cout << endl;
    }
}

void printPattern5(int n) {
    for(int i =1; i <=n; i++) {
        for(int j = 1; j <= n - i +1; j++) {
            cout << "*";
        };
        cout << endl;
    }
}

void printPattern6(int n) {
    for(int i =1; i <=n; i++) {
        for(int j = 1; j <= n - i +1; j++) {
            cout << j;
        };
        cout << endl;
    }
}

void printPattern7(int n) {
    for(int i =0; i <n; i++) {
        //space
        for(int j = 0; j<n-i-1 ; j++) {
            cout << " ";
        }
        //star
            for(int j=0; j< 2*i+1; j++) {
                cout << "*";
        //space
            }
                for(int j=0; j<n-i-1; j++) {
                    cout << " ";
                }
        cout << endl;
            }
   
        }

void printPattern8(int n) {
    //space
    for(int i=0;i<n;i++) {
        for(int j=0; j <i;j++) {
            cout << " ";
        };
        //star
        for(int j =0; j< 2*n-(2*i+1); j++) {
            cout << "*";
        };
        //space
        for(int j=0; j< 2*i; j++) {
            cout << " ";
        }
        cout<< endl;
        
    }
}

int main() {
    int t;
    cout << "Enter test case no: ";
    cin >> t;
    for(int i=0; i<t;i++) {
    int n;
    cout << "Enter a input number for pattern: ";
    cin >> n;
    printPattern8(n);
    }
}