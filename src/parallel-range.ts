import parallel from 'parallel-es'
import {cube} from './utils/cube'

// Showing an imported function passed to map function
parallel.range(0, 10)
  .map(cube)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))



// Also Working:
// parallel.range(0, 10)
//   .map(value => value * value)
//   .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
//   .then(result => console.log(result))
