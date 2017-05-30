import parallel from 'parallel-es'
import * as _ from 'lodash'

// Example showing `from` which allows you to pass any array to the function to
// be processed  in parallel. This includes passing in functions into the worker
// environment.
// To Run: `node dist/parallel-from-environmnet.js`
const environment = {
  zip: '80305'
}

interface IEnvironment {
  readonly zip: string;
}

const addresses = [
  {num: '123', street: 'Main St.', city: 'Boulder'},
  {num: '555', street: 'Elm St.', city: 'Boulder'},
  {num: '100', street: '10th Ave.', city: 'Boulder'},
]

interface IAddress {
  readonly num: string;
  readonly street: string;
  readonly city: string;
}

function formatAddresses(address: IAddress, environment: IEnvironment): string {
  const {zip} = environment
  const {num, street, city} = address
  return `${num} ${street} ${city} ${zip}`
}

// Second argument to `.from` is an optional object that allows customizations
// over thread usage. Options are:
// maxDegreeOfParallelism,
// maxValuesPerTask
// minValuesPerTask
// threadPool
// scheduler
// functionCallSerializer
parallel.from(addresses, {maxDegreeOfParallelism: 2})
  .inEnvironment(environment)
  .map(formatAddresses)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))


// == results ==================================================================
// // Result:
// The result of the task 2 is [ '100 10th Ave. Boulder' ]
// The result of the task 0 is [ '123 Main St. Boulder' ]
// The result of the task 1 is [ '555 Elm St. Boulder' ]
// [ '123 Main St. Boulder 80305',
//   '555 Elm St. Boulder 80305',
//   '100 10th Ave. Boulder 80305' ]
