#include <iostream>

using namespace std;

void hellCPP(int);

int main() {

    int times;
    cout << "정수를 입력하십시오. \n";
    cin >> times;
    hellCPP(times);
    return 0;
}

void hellCPP(int n) {
    for(int i = 0; i < n; i ++) {
        cout << "Hello, C++!\n";
    }
}