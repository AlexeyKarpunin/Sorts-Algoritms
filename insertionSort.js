function insertionSort (arr) {
  let last;
  let previous = 0;
  for (let index = 1; index < arr.length; index++) {
    last = index;
    previous = index - 1;
    while (index > 0) {
      if(arr[index] < arr[previous]) {
        [ [arr[previous]], [arr[index]] ] = [ [arr[index]], [arr[previous]] ]
        index--;
        previous--;
      } else {
        previous++;
        break;
      }
    }
  }
  return arr;
}

module.exports = {
  insertionSort,
}