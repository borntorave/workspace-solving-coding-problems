#include <iostream>
using namespace std;

// define a classic cards game structure
struct Card {
    char face; // A, J, Q, K and 0-9
    string shape; //  clubs (♣), diamonds (♦), hearts (♥), and spades (♠)
    string color; // black, red
}; // sizeof Card = 1 byte + 4 * 1 + 2 * 1 = 7 bytes

int main()
{
    struct Card card;
    card.shape = "clubs";
    card.color = "red";
    card.face = '3';

    return 0;
}