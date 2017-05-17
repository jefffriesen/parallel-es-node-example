import parallel from 'parallel-es'

const environment = { taskIndex: 2, valuesPerTask: 2 }


// const generatorFunc = (n: number) => n
// parallel
//   .times(10, generatorFunc)
//   .then(result => console.log(result))


// parallel
//   .times(5, 10, n => n * 2)
//   .then(result => console.log(result))
//


// parallel.times(5, 2)
// .map(value => value * value)
// .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
// .then(result => console.log(result))
