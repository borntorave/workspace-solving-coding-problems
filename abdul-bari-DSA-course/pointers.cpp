#include <bits/stdc++.h>
using namespace std;

// struct Rectangle {
//     int length;
//     int width;
// };

// int main()
// {
//     struct Rectangle *p;
//     p = new Rectangle;
//     p->length = 10;
//     p->width = 15;

//     cout << p->length;
//     cout << p->width;

//     return 0;

// }


// int main() 
// {

//     int a[2] = {1, 5};
//     int *p = new int[6];
//     int *q = new int[10];

//     for(int i=0;i<2;i++)
//         p[i] = a[i];

//     for(int i=0;i<6;i++)
//     {   
//         // cout << a[i] << " ";
//         cout << p[i] << " ";
//     }
//     cout << endl;
//     for(int i=0;i<10;i++) {
//         q[i] = p[i];
//         cout << q[i] << " ";
//     }

//     delete []p;
//     delete []q;

//     return 0;
// }

int main() {
    // first method to implement matrix in heap
    int a[2][3] = {{1,2,3}, 
                    {4,5,6}};
    int *p[2];
    p[0] = new int[3];
    p[1] = new int[3];

    for(int i=0;i<2;i++)
    {
        for(int j=0;j<3;j++)    
        {
            p[i][j] = a[i][j];
        }
    }

    for(int i=0;i<2;i++)
    {
        for(int j=0;j<3;j++)
        {
            cout << p[i][j] << endl;
        }
    }

    cout << endl;

    // second method ...
    int **p_a;
    p_a = new int*[0];
    p_a = new int*[1];

    for(int i=0;i<2;i++)
    {
        for(int j=0;j<3;j++)
        {
            p_a[i][j] = a[i][j];
        }
    }

    for(int i=0;i<2;i++)
    {
        for(int j=0;j<3;j++)
        {
            cout << p_a[i][j] << endl;
        }
    }

    return 0;
}