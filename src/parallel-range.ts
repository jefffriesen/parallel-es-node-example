import parallel from 'parallel-es'
import {square} from './utils/square'

// Example showing `.range` which allows you to operate on a range of values
// using map, filter and reduce function chaining
// To Run: node dist/parallel-range.js


// Showing an imported function passed to map function
parallel.range(0, 10)
  .map(square)
  .subscribe((subresult, taskIndex) => console.log(`square subtask resut: ${taskIndex} is`, subresult))
  .then(result => console.log('square result: ', result))
// result: [ 0, 1, 8, 27, 64, 125, 216, 343, 512, 729 ]


// Simple lamda function assigned to map. Note that this needs to be
// compiled to es5 non-arrow functions. See this comment as to why:
// https://github.com/MichaReiser/parallel.es/issues/105#issuecomment-301850333
parallel.range(0, 10)
  .map(value => value * value * value)
  .subscribe((subresult, taskIndex) => console.log(`lambda square subtask result ${taskIndex} is`, subresult))
  .then(result => console.log('lamda square result: ', result))
// result: [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


// Additional chaining options: filter, reduce and catch.
parallel.range(0, 10)
  // .inEnvironment(environment) // Can pass in values and functions into the worker environment
  .map(square)
  .filter(value => value % 2 === 0)
  .reduce(0, (acc, val) => acc + val)
  .subscribe((subresult, taskIndex) => console.log(`square filter & reduce result: ${taskIndex} is`, subresult))
  .then(result => console.log('filter and reduce result', result))
  .catch(err => {throw new Error(`We have problems: ${err}`)})
// result: 120
