#include <iostream>

void sort(int array[11], int size);

int main() {
    int array[11] = {9,1,2,4,3,5,8,10,7,6,0};
    int size = sizeof(array)/sizeof(array[0]);

    sort(array, size);

    for(int element : array) {
        std::cout << element << " ";
    }
    return 0;
}

void sort (int array[11], int size) {
    int temp;
    for(int i = 0 ; i < size -1; i++) {
        for(int j =0; j < size - i -1; j++) {
            if(array[j] > array[j + 1]) {
                temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}