import parallel from 'parallel-es'
import * as _ from 'lodash'

// Example showing `from` which allows you to pass any array to the function to
// be processed  in parallel.
// To Run: node dist/parallel-from.js

const addresses = [
  {num: '123', street: 'Main St.', city: 'Boulder', zip: '80305'},
  {num: '555', street: 'Elm St.', city: 'Boulder', zip: '80305'},
  {num: '100', street: '10th Ave.', city: 'Boulder', zip: '80305'},
]

interface IAddress {
  readonly num: string;
  readonly street: string;
  readonly city: string;
  readonly zip: string;
}

function formatAddresses(address: IAddress): string {
  const {num, street, city, zip} = address
  return `${num} ${street} ${city} ${zip}`
}

parallel.from(addresses)
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
