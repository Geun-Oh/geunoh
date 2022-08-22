#include <iostream>

using namespace std;

int main() {
    int a = 6;
    int* b;

    cout << "a의 값" << a << endl;
    cout << "*b의 값" << *b << endl;

    cout << "a의 주소" << &a << endl;
    cout << "*b의 주소" << b << endl;

    *b += 1;

    cout << "이제 a의 값은" << a << endl;

    return 0;
}