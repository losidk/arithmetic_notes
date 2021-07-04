/**
 1128. 等价多米诺骨牌对的数量
 给你一个由一些多米诺骨牌组成的列表 dominoes。

 如果其中某一张多米诺骨牌可以通过旋转 0 度或 180 度得到另一张多米诺骨牌，我们就认为这两张牌是等价的。

 形式上，dominoes[i] = [a, b] 和 dominoes[j] = [c, d] 等价的前提是 a==c 且 b==d，或是 a==d 且 b==c。

 在 0 <= i < j < dominoes.length 的前提下，找出满足 dominoes[i] 和 dominoes[j] 等价的骨牌对 (i, j) 的数量。

 示例：

 输入：dominoes = [[1,2],[2,1],[3,4],[5,6]]
 输出：1

 提示：

 1 <= dominoes.length <= 40000
 1 <= dominoes[i][j] <= 9

 */

/**
 * 思路： 嵌套遍历当前数组，如果满足 等价条件，则将 count+1
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
  const l = dominoes.length
  let count = 0
  for (let i = 0; i < l; i++) {
    const [targetA, targetB] = dominoes[i]
    for (let j = i; j < l; j++) {
      if (i !== j) {
        const [a, b] = dominoes[j]
        if ((targetA === a && targetB === b) || (targetA === b && targetB === a)) {
          count++
        }
      }
    }
  }
  return count
}
const dominoes = [[1, 2], [2, 1], [3, 4], [5, 6]]
// const dominoes = [[1, 2], [1, 2], [1, 1], [1, 2], [2, 2]]
console.log(numEquivDominoPairs(dominoes))
