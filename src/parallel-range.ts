import parallel from 'parallel-es'
import {cube} from './utils/cube'
// Comment out all but the function you want to test


// Simple lamda function assigned to map. Note that this needs to be
// compiled to es5 non-arrow functions. See this comment as to why:
// https://github.com/MichaReiser/parallel.es/issues/105#issuecomment-301850333
parallel.range(0, 10)
  .map(value => value * value)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))
// result: [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


// Showing an imported function passed to map function
parallel.range(0, 10)
  .map(cube)
  .subscribe((subresult, taskIndex) => console.log(`Example 1 task resut: ${taskIndex} is`, subresult))
  .then(result => console.log(result))
// result: [ 0, 1, 8, 27, 64, 125, 216, 343, 512, 729 ]


// Additional chaining options: filter, reduce and catch.
parallel.range(0, 10)
  .map(cube)
  .filter(value => value % 2 === 0)
  .reduce(0, (acc, val) => acc + val)
  .subscribe((subresult, taskIndex) => console.log(`Example 2 task result: ${taskIndex} is`, subresult))
  .then(result => console.log(result))
  .catch(err => {throw new Error(`We have problems: ${err}`)})
// result: 800
