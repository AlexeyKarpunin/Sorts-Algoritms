function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) { // this loop found the minimum value
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [ [arr[i]], [arr[min]] ] = [ [arr[min]], [arr[i]] ]
    }
  }
 
  return arr;
}

const selection = {
  sortName: 'Selection sort algoritm',
  sortFunction: selectionSort,
}

module.exports = {
  selection,
  selectionSort,
}