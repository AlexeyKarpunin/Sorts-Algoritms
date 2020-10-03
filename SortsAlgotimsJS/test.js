const {countingSort, countingSort2} = require('./countingSort');
const {quickSort} = require('./quickSort');
const {mergeSort} = require('./mergeSort');
const {insertionSort} = require('./insertionSort');
const {selectionSort} = require('./selectionSort');

function createArray (maxlength, maxNumber) {
  let randomArray = new Array();
  for (let i = 0; i < maxlength; i++) {
    const randomNumber = Math.floor(Math.random() * maxNumber)
    randomArray.push(randomNumber)
  }
  return randomArray;
}



for (let num = 0; num < 10; num++) {
  const testArray = createArray(10, 10)
  console.log(selectionSort(testArray));
}
