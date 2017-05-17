import parallel from 'parallel-es'

const environment = { taskIndex: 2, valuesPerTask: 2 }

// Can't get this working
// https://github.com/MichaReiser/parallel.es/blob/a00b50ae92cbfc1e4406c1cc72c113252d989afc/test/common/parallel/slave/times-iterator.specs.ts


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
