import parallel from 'parallel-es'
import {cube} from './utils/cube'

// Simple lamda function assigned to map. Note that this needs to be
// compiled to es5 non-arrow functions. See this comment as to why:
// https://github.com/MichaReiser/parallel.es/issues/105#issuecomment-301850333
function range1Fn(): void {
  parallel.range(0, 10)
    .map(value => value * value)
    .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
    .then(result => console.log(result))
}
range1Fn()
// [ 0, 1, 4, 9, 16, 25, 36, 49, 64, 81 ]


// Showing an imported function passed to map function
function range2Fn(): void {
  parallel.range(0, 10)
    .map(cube)
    .subscribe((subresult, taskIndex) => console.log(`Example 1 task resut: ${taskIndex} is`, subresult))
    .then(result => console.log(result))
}
// range2Fn()
// [ 0, 1, 8, 27, 64, 125, 216, 343, 512, 729 ]


// See additiona chaining options: filter, reduce and catch.
function range3Fn(): void {
  parallel.range(0, 10)
    .map(cube)
    .filter(value => value % 2 === 0)
    .reduce(0, (acc, val) => acc + val)
    .subscribe((subresult, taskIndex) => console.log(`Example 2 task result: ${taskIndex} is`, subresult))
    .then(result => console.log(result))
    .catch(err => {throw new Error(`We have problems: ${err}`)})
}
// range3Fn() // result: 800


// Output:
// The result of the task 7 is [ 343 ]
// The result of the task 8 is [ 512 ]
// The result of the task 9 is [ 729 ]
// The result of the task 4 is [ 64 ]
// The result of the task 2 is [ 8 ]
// The result of the task 3 is [ 27 ]
// The result of the task 0 is [ 0 ]
// The result of the task 6 is [ 216 ]
// The result of the task 1 is [ 1 ]
// The result of the task 5 is [ 125 ]
// [ 0, 1, 8, 27, 64, 125, 216, 343, 512, 729 ]
