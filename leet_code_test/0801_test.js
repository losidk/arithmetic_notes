/**
 面试题 08.01. 三步问题
 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

 示例1:

 输入：n = 3
 输出：4
 说明: 有四种走法
 示例2:

 输入：n = 5
 输出：13
 提示:

 n范围在[1, 1000000]之间
 */
/**
 * @param {number} n
 * @return {number}
 */
var waysToStep = function (n) {
  let arr = [1, 2, 4, 7, 13]
  if (n <= 4) return arr[n - 1]
  for (let i = 5; i < n; i++) {
    arr[i] = (arr[i - 1] + arr[i - 2] + arr[i - 3]) % 1000000007
  }
  return arr[n - 1]
}
console.log(waysToStep(5))
