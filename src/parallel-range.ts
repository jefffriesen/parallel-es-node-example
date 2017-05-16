// import * as parallel from "parallel-es"
// import parallel from "parallel-es/default"
import parallel from "parallel-es"
console.log('parallel: ', parallel)

parallel.range(0, 100000)
  .map(value => value * value)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))

// parallel.from([1, 2, 3])
//   .map(function (value) {
//     return value * 2
//   })
//   .then(result => console.log(result))

// Also doesn't work
// parallel.run(() => {
// 	return [1, 2, 3]
// })
// .then(result => console.log(result))