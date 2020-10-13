function insertionSort (arr) {
  let previous = 0;
  for (let index = 1; index < arr.length; index++) {
    previous = index - 1;
    while (index > 0) {
      if(arr[index] < arr[previous]) {
        [ [arr[previous]], [arr[index]] ] = [ [arr[index]], [arr[previous]] ]
        index--;
        previous--;
      } else {
        break;
      }
    }
  }
  return arr;
}

const insertion = {
  sortName: 'Insertion sort algoritm',
  sortFunction: insertionSort,
}

module.exports = {
  insertion,
  insertionSort,
}