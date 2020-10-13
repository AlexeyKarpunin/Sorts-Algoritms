/**
 * Coiunting sort
 * It works only with numbers
 * O(n + k)
 */

function countingSort (arr) {
  let max = arr[0]
  for (value of arr) { // O(N) max number was found
    if (value > max) max = value;
  }

  const countingArray = new Array(max + 1).fill(0) // create new array where we will couting numbers O(N)
  for (let i = 0; i < arr.length; i++) { // counting numbers O(N)
    countingArray[arr[i]]++
  }

  let resultArray = [];
  for (let i = 0; i < countingArray.length; i++) {
    while (countingArray[i] > 0) {
      resultArray.push(i)
      countingArray[i]--
    }
  } // O(N log N)
  return resultArray;
}

function countingSort2 (arr) {
  let max = arr[0]
   arr.forEach( element => element > max ? max = element : null ); // O(N) max number was found
   
   const countingArray = new Array(max + 1).fill(0) // create new array where we will couting numbers O(N)
   arr.forEach( (element, index) => countingArray[arr[index]]++ ) // counting numbers O(N)
   
   let resultArray = [];
   countingArray.forEach( (element, index) => {
     for (; element > 0; element--) {
       resultArray.push(index)
     }
   }) // O(N log N)
   return resultArray;
}

const counting = {
  sortName: 'Countig sort algoritm',
  sortFunction: countingSort,
}

module.exports = {
  countingSort,
  countingSort2,
  counting,
}
