#include <iostream> 

int searchArray(std::string foods[] ,std::string myFood, int size);

int main() {
    //int numbers[] = {1, 2, 3, 4, 5, 6, 7, 7, 9, 10};

    std::string foods[] = {"Pizza" , "Burger", "Fries"};

    int size = sizeof(foods)/sizeof(foods[0]);
    int index;
    std::string myFood;

    std::cout << "Enter food to search for: " << '\n';
    std::getline(std::cin, myFood);

    index = searchArray(foods, myFood, size);
    
    if(index != -1) {
        std::cout << "Index is :" << index; 
    } else {
        std::cout << "No value is found!";
    }

    return 0;
}

int searchArray(std::string food[], std::string myFood, int size) {
    for(int i = 0; i < size; i++) {
        if(food[i] == myFood) {
            return i;
        }
    }
    return -1;
}