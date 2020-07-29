/**
 * 剑指 Offer 42. 连续子数组的最大和
 输入一个整型数组，数组里有正数也有负数。数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

 要求时间复杂度为O(n)。
 示例1:

 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
 输出: 6
 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。


 提示：

 1 <= arr.length <= 10^5
 -100 <= arr[i] <= 100
 *
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0
    let res = nums[0]
    let length = nums.length
    for (let i = 0; i < length; i++) {
        const item = nums[i]
        if (sum > 0) {
            sum += item
        } else {
            sum = item
        }
        res = Math.max(res, sum)
    }
    return res
};
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([-1]));
