// Write a function called pivotIndex which accepts an array of integers, and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right. If there are more than one valid pivot index, return the smallest value.

// Examples:

// pivotIndex([1,2,1,6,3,1]) // 3
// pivotIndex([5,2,7]) // -1  no valid pivot index
// pivotIndex([-1,3,-3,2]) // 1 valid pivot at 2: -1 + 3 = 2 however there is a smaller valid pivot at 1: -1 = -3 + 2

// add whatever parameters you deem necessary
function pivotIndex(arr, idx = 1) {
  Array.prototype.sum = function () {
    return this.reduce(function (a, b) {
      return a + b;
    });
  };

  const leftArr = [];
  let rightArr1 = arr;
  for (let num of arr) {
    leftArr.push(num);
    leftArr;
    let rightArr2 = rightArr1.slice(idx + 1);
    rightArr2;
    if (rightArr2.length === 0) return -1;
    if (rightArr2.sum() === leftArr.sum()) return idx;
    idx++;
  }
}

const arr = [-1, 3, -3, 2];
pivotIndex(arr);

module.exports = {
  pivotIndex,
};
