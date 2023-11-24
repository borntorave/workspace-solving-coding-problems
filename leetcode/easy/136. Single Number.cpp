// https://leetcode.com/problems/single-number/description/

#include <bits/stdc++.h>
using namespace std;

class Solution {
public:
    int singleNumber(vector<int>& nums) {
        if(nums.size() == 0) {
            return 0;
        }
        if(nums[0] != nums[1]){
            return nums[0];
        }

        for(int i = 1; i < nums.size(); ++i)
        {
            if(nums[i] != nums[i+1])
            {
                return nums[i+1];
            }
        }
        return 0;
    }
};

int main()
{
    Solution sol;
    vector<int> nums = {1};
    int res = sol.singleNumber(nums);
    cout << res;
    return 0;
}