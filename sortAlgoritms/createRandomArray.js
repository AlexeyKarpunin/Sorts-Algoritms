 /**
  * @param {number} num amount of elements in randomArray
  * @return {Array} Array with random numbers;
  */
 
 function createArray (num) {
  let randomArray = [];

  for (let i = 0; i < num; i++) {
    const randomNumber = Math.floor(
      (Math.random() * 1000) - 500
    );

    randomArray.push(randomNumber);
  }
   return randomArray;
 }

 module.exports = {
  createArray,
 }