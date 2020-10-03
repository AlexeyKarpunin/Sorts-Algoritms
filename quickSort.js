function quickSort (arr) {
  if ( arr.length < 2) return arr;
  const randomElement = arr[Math.floor(Math.random() * arr.length)];
  let left = [];
  let middle = [];
  let right = [];

  arr.forEach( (element) => {
    if (randomElement === element) middle.push(element);
    if (randomElement > element) left.push(element);
    if (randomElement < element) right.push(element);
  });
  return quickSort(left).concat(middle).concat(quickSort(right));
}


module.exports = {
  quickSort,
}
