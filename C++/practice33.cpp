#include <iostream> 

int searchArray(int numbers[] ,int myArray, int size);

int main() {
    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 7, 9, 10};
    int size = sizeof(numbers)/sizeof(numbers[0]);
    int index;
    int myNum;

    std::cout << "Enter number to search for: " << '\n';
    std::cin >> myNum;

    index = searchArray(numbers, myNum, size);
    
    if(index != -1) {
        std::cout << "Index is :" << index; 
    } else {
        std::cout << "No value is found!";
    }

    return 0;
}

int searchArray(int numbers[], int myNum, int size) {
    for(int i = 0; i < size; i++) {
        if(numbers[i] == myNum) {
            return i;
        }
    }
    return -1;
}