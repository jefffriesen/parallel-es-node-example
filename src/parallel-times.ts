import parallel from 'parallel-es'

/* Error
* https://github.com/MichaReiser/parallel.es/blob/a00b50ae92cbfc1e4406c1cc72c113252d989afc/test/common/parallel/slave/times-iterator.specs.ts
*
* Error:
* (node:32723) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): [object Object]
* (node:32723) DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
*
* The online solution to this problem is setting `"target": "es6"` but then I
* can't use lamda functions in `.map` instead of explicit `function() {}`.
*/

parallel.times(5, 2)
  .map(value => value * value)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))
