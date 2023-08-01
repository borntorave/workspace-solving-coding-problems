#include <iostream>
#include <string>
#include <vector>
using namespace std;

// 7. Write a C++ program to exchange the first and last characters in a given string and return the result string.
string ex07(string s) {
   if (s.size() == 1) {
       return s;
   }

   char first_char = s[0];
   char last_char = s[s.size() - 1];

   for (int i = 0; i <= s.size() - 1; ++i) {
       if(i == 0) {
           s[i] = last_char;
       } else if(i == s.size() - 1) {
           s[i] = first_char;
       } else {
           s[i] = s[i];
       }
   }
   return s;
}

// 8. Write a C++ program to create a string that is 4 copies of the 2 front characters of a given string. If the given string length is less than 2 return the original string.
string ex08(string s) {
    string new_s;
    char temp[2] = {s[0], s[1]};

    if(s.size() < 2) {
        cout << s << endl;
        return s;
    }

    for(int x = 0; x < 2; ++x) {
        new_s += temp[x];
    }

    for(int y = 0; y < 4; ++y) {
        cout << new_s;
    }

    return new_s;
}

// 9. Write a C++ program to create a string with the last character added at the front and back of a given string of length 1 or more
string ex09(string s) {
    char last_char = s[s.size() - 1];
    string new_str;
    new_str += last_char; // N

    for(int i = 0; i < s.size(); i++) {
        new_str += s[i]; // NPAIN
    }

    new_str += last_char; // NPAINN

    return new_str;
}

// 10. Write a C++ program to check if a given positive number is a multiple of 3 or a multiple of 7.
int ex10(int num) {
    if(num % 3 == 0 | num % 7 == 0) {
        return 1;
    } else {
        return 0;
    }
}

// 11. Write a C++ program to create a string taking the first 3 characters of a given string. Then, return the string with the 3 characters added to both the front and back. If the given string length is less than 3, use whatever characters are there.
string ex11(string s) {
    char f3[3];
    string new_s;
    for(int i=0; i<3; ++i) {
        f3[i] = s[i];
        new_s += f3[i];
    }
    new_s += s;

    for(int i=0; i<3; ++i) {
        new_s += f3[i];
    }
    return new_s;
}

// 12. Write a C++ program to check if a given string starts with 'C#' or not.
int ex12(string s) {

    char buffer[2] = {'C', '#'};
    if(s[0] == buffer[0] && s[1] == buffer[1]) {
        return 1;
    }
    return 0;
}

// 13. Write a C++ program to check if one given temperature is less than 0 and the other is greater than 100.
int ex13(int t1, int t2) {
    
    if((t1 < 0 && t2 > 100) || (t1 > 100 && t2 < 0)) return 1;

    return 0;
}

// 14. Write a C++ program to check two given integers whether either of them is in the range 100..200 inclusive.
int ex14(int n1, int n2) {
    if ((n1 >= 100 && n1 <= 200) || (n2 >= 100 && n2 <= 200)) {
        return 1;
    }
    return 0;
}

// 15. Write a C++ program to check whether three given integer values are in the range 20..50 inclusive. Return true if 1 or more of them are in the range, otherwise false.
bool ex15(int n1, int n2, int n3) {
    if ((n1 >= 20 && n1 <= 50) || (n2 >= 20 && n2 <= 50) || (n3 >= 20 && n3 <= 50)) {
        return true;
    }
    return false;
}
// 16. Write a C++ program to check whether two given integer values are in the range 20..50 inclusive. Return true if 1 or other is in the range, otherwise false.
bool ex16(int n1, int n2) {
    if ((n1 >= 20 && n1 <= 50) || (n2 >= 20 && n2 <= 50)) {
        return true;
    }

    return false;
}
// 17. Write a C++ program to check if the string 'yt' appears at index 1 in a given string. If it appears return a string without 'yt' otherwise return the original string.
// easier method: s.replace("yt", "");
string ex17(string s) {
    char buffer[2] = {'y', 't'};
    string new_s;
    for(int i=0; i<s.size(); ++i) {
        if(i == 1) {
            if(s[i] == buffer[0] && s[i+1] == buffer[1]) {
                new_s = s.substr(0, i) + s.substr(i+2, s.size());
                return new_s;
            }
        }
    }
    return s;
}
// 18. Write a C++ program to check the largest number among three given integers.
int ex18(int n1, int n2, int n3) {
    int arr[] = {n1, n2, n3};
    int size = sizeof(arr) / sizeof(arr[0]);
    for(int i = 0; i < size; ++i) {
        if(arr[0] <= arr[i]) {
            arr[0] = arr[i];
        }
    }

    return arr[0];
}

// 19. Write a C++ program to check which number is closest to the value 100 among two given integers. Return 0 if the two numbers are equal.
int ex19(int n1, int n2) {
    int t1, t2;
    if (n1 == n2) {
        return 0;
    } else {
        t1 = 100 - n1;
        t2 = 100 - n2;
        if (t1 > t2) {
            return n1;
        } else {
            return n2;
        }
    }
    return 0;
}

// 20. Write a C++ program to check whether two given integers are in the range 40..50 inclusive, or they are both in the range 50..60 inclusive.
int ex20(int n1, int n2) {
    if ((n1 >= 40 && n1 <= 50) && (n2 >= 40 && n2 <= 50)) {
        return 1;
    } else if ((n1 >= 50 && n1 <= 60) && (n2 >= 50 && n2 <= 60)) {
        return 1;
    } else {
        return 0;
    }
}

// 21. Write a C++ program to find the larger value from two positive integer values that is in the range 20..30 inclusive. Also, return 0 if neither is in that range.
int ex21(int n1, int n2) {
    if ((n1 >= 20 && n1 <= 30) && (n2 >= 20 && n2 <= 30)) {
        if (n1 > n2) {
            return n1;
        } else {
            return n2;
        }
    } else {
        return 0;
    }
}
// 22. Write a C++ program to check if a given string contains between 2 and 4 'z' characters.
int ex22(string s) {
    int limit_z = 0;

    for (int i = 0; i < s.size(); ++i) {
        if (s[i] == 'z') {
            limit_z++;
        }
    }
    if ( (limit_z == 2) || (limit_z == 3) || (limit_z == 4) )
    {
        return 1;
    }

    return 0;

}

// 23. Write a C++ program to check if two given non-negative integers have the same last digit.
int ex23(int n1, int n2) {
    string str_n1, str_n2;
    str_n1 = to_string(n1);
    str_n2 = to_string(n2);

    // cout << str_n1[str_n1.size() - 1] << endl;
    // cout << str_n2[str_n2.size() - 1] << endl;

    if (n1 < 0 && n2 < 0) {
        return 0;
    } else {
        
        if(str_n1[str_n1.size() - 1] == str_n2[str_n2.size() - 1]) {
            return 1;
        }
    }
    return 0;
}

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
int count_sheep(vector<bool> arr) {
    int count_sheep = 0;
    for(int i = 0; i < arr.size(); ++i) {
        if(arr[i] == true) {
            count_sheep++;
        }
    }
    return count_sheep;
}

// 24. Write a C++ program to create the string which is n (non-negative integer) copies of a given string.
string ex24(string s, int n) {

    for(int i = 0; i < n; i++) {
        cout << s;
    }
    return s;
}

// 25. Write a C++ program to create another string which is n (non-negative integer) copies of the first 3 characters of a given string. If the length of the given string is less than 3 then return n copies of the string.
string ex25(string s, int n) {
    if(n < 0) exit(0);
    string new_s = "";

    if(s.size() < 3) {
        for(int i = 0; i < n; ++i) {
            new_s += s;
        }
    } else {
        for(int i = 0; i < 3; ++i) {
            new_s[i] += s[i];
        }
        for(int i = 0; i < n; ++i) {
            cout << new_s;
        }
    }

    return new_s;
}

// TODO: check solution for ex25, to lazy and bored and exhausted to find a solution :)
// time 11:41:20
// main function
int main() {
    ex25("python", 3);
    return 0;
}