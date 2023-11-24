// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution
{
public:
    int maxProfit(vector<int> &prices)
    {
        if (prices.size() == 0)
        {
            return 0;
        }

        int buy = prices[0];
        int sell = 0;

        for (int i = 1; i < prices.size(); i++)
        {
            if (buy > prices[i])
                buy = prices[i];
            else if (prices[i] - buy > sell)
            {
                sell = prices[i] - buy;
            }
        }

        return sell;
    }
};

int main()
{
    Solution solution;

    vector<int> prices = {7, 1, 5, 3, 6, 4};

    int profit = solution.maxProfit(prices);

    cout << profit;

    return -1;
}