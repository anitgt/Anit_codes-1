#include <iostream>

using namespace std;

int main() {
    string questions[] = {"1. What year was cpp created?",
                        "2. Who invented cpp?",
                        "3. what is the predecessor of cpp?",
                        "4. Is earth flat?"};
    
    string options[][4] = {{"A. 1969", "B. 1975", "C. 1985", "D. 1989"},
                        {"A. Guido van rossum", "B. Bjarne stroustrup", "C. Jhon kennedy", "D. Me"},
                        {"A. C", "B. C+", "C. C--" , "D. B++"},
                        {"A. yes", "B. No", "C. Sometimes", "D. Whats earth?"}};

    char answerKey[] = {'C', 'B', 'A', 'B'};
    
    int size = sizeof(questions)/sizeof(questions[0]);
    char guess;
    int score = 0;

    for(int i = 0; i < size ; i++) {
        cout << "******** \n";
        cout << questions[i] << '\n';

        for(int j=0; j < sizeof(options[i])/sizeof(options[i][0]); j++) {
            cout << options[i][j] << '\n';

        };

        cin >> guess;
        guess = toupper(guess);

        if(guess == answerKey[i]) {
            cout << "Ans is correct";
            score++;
        } else {
            cout << "Incorrect \n";
            cout << "correct ans is: " << answerKey[i] << '\n';
        };
    };

    cout << "************Results*************** \n";
    cout << "Correct guesses: " << score  << '\n';
    cout << "# of questions: " << size << '\n';
    cout << "Score: " << (score /(double) size) *100 << "%" << '\n';
    return 0;
}