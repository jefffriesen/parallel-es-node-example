import parallel from 'parallel-es'
import {cube} from './utils/cube'

// Showing an imported function passed to map function
parallel.range(0, 10)
  .map(cube)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))



// Also works:
// parallel.range(0, 10)
//   .map(value => value * value)
//   .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
//   .then(result => console.log(result))


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
