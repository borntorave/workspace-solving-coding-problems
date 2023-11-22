// https://leetcode.com/problems/rotate-array/description/
#include <bits/stdc++.h>
using namespace std;

class Solution
{
public:
    void rotate(vector<int> &nums, int k)
    {
        // move tail to head by k-steps

        for (int i = 0; i < k; i++)
        {
            int last = nums.back();
            nums.pop_back();
            nums.insert(nums.begin(), last);
        }
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {1, 2, 3, 4, 5, 6, 7};
    int k = 3;

    int rot = sol.rotate(nums, k);
    cout << rot << endl;

    return 0;
}
