function mergeSort (arr) {
  if (arr.length < 2) return arr;

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeHelper(mergeSort(left), mergeSort(right));
}

function mergeHelper (left, right) {
  const arraySort = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      arraySort.push(right[j])
      j++
    } else {
      arraySort.push(left[i])
      i++
    }
  }

    return [...arraySort, ...left.slice(i), ...right.slice(j)]
}

const merge = {
  sortName: 'Merge sort algoritm',
  sortFunction: mergeSort,
}

module.exports = {
  mergeSort,
  merge,
}
