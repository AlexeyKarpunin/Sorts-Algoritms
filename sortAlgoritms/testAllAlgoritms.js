const {data} = require('./data');
const {createArray} = require('./createRandomArray');

function testsAll () {
  for (let i = 0, j = 1; j < data.length + 1; i++, j++) {
    const callBack = () => console.log(`${data[i].sortName} \n ${data[i].sortFunction(createArray(10))} \n`);
    setTimeout(callBack , 1000 * i);
  }
}

testsAll();