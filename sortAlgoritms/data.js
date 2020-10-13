const {counting} = require('./algoritms/countingSort');
const {quick} = require('./algoritms/quickSort');
const {merge} = require('./algoritms/mergeSort');
const {insertion} = require('./algoritms/insertionSort');
const {selection} = require('./algoritms/selectionSort');

const data = [
  counting,
  quick,
  merge,
  insertion,
  selection
]

module.exports = {
  data,
}