import parallel from 'parallel-es'
import {square} from './utils/square'

// Example showing `parallel.run` which sends the computation to a background
// thread. This may be useful to free up the UI while a CPU-intensive task is
// running
// To Run: node dist/parallel-run.js

//  Not working:
// (node:33089) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): [object Object]
// (node:33089) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.

parallel
  .run(function() {
	   return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(square)
   })
  .then(result => console.log(result))

// expected result: [ 0, 1, 8, 27, 64, 125, 216, 343, 512, 729 ]
