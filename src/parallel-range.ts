import parallel from "parallel-es"

parallel.range(0, 10)
  .map(value => value * value)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))

