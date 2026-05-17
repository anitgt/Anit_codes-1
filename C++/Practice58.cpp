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

void printPattern10(int n) {
    for(int i=0; i <=2*n-1; i++) {
        int stars = i;
        if(i>n) stars = 2*n-i;
        for(int j=0; j<=stars; j++) {
            cout << "*";
        }
        cout << endl;
    }
}

void printPattern11(int n) {
     int start;
    for(int i = 0; i <n; i++) {
        if(i %2 ==0) start = 1;
        else start = 0;
        for(int j =0; j <= i;j++) {
            cout << start;
            start = 1-start;
        };
        cout << endl;

    }
}

void printPattern12(int n) {
    int initial = 2*(n-1);
    for(int i=1; i<=n; i++) {
        //number
        for(int j=1; j<=i; j++) {
            cout << j;
        };

        //space
         for(int j=1; j<= initial; j++) {
            cout << " ";
        }
        //number
         for(int j=1; j<=i; j++) {
            cout << j;
        };
        cout << endl;
        initial = initial -2;
    }
}


void printPattern13(int n){
    int number = 1;
    for(int i= 1; i<=n; i++) {
        for(int j=1; j<=i; j++) {
            cout << number << " ";
            number++;
        }
            cout << endl;
        }
}


void printPattern14(int n) {
    for(int i=1; i<=n; i++) {
        for(char ch = 'A'; ch<= 'A' +i; ch++) {
            cout << ch << ' ';
        };
        cout << endl;
    }
}

void printPattern15(int n) {
    for(int i=0; i <n; i++) {
        for(char ch= 'A'; ch<= 'A'+(n-i-1); ch++) {
        cout << ch << " ";
    }
    cout << endl;
}
}

void printPattern16(int n) {
    char ch = 'A';
    for(int i=0; i <=n; i++) {
        for(int j=0; j<=i; j++) {
            cout << ch;
        }
        ch++;
        cout << endl;
    }
}

void printPattern17(int n) {
   for(int i=0; i<n; i++) {
     //spaces
    for(int j=0; j< n-i-1; j++) {
        cout << " ";
    };

    //alphabets
    char ch = 'A';
    int breakpoint = (2* i+1) /2;
    for(int j=1; j <= 2*i+1; j++) {
        cout << ch;
        if(j <= breakpoint)ch ++;
        else ch--;
    };
    //spaces
     for(int j=0; j< n-i-1; j++) {
        cout << " ";
    };
    cout << endl;
}
}

void printPattern18(int n) {
    for(int i =0; i<n; i++) {
        for(char ch = 'E'-i; ch <= 'E'; ch++) {
            cout << ch << " ";
        };
        cout << endl;
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
    printPattern18(n);
    }
}