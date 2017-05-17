import parallel from 'parallel-es'

// Example showing `from` which allows you to pass any array to the function to be
// processed  in parallel.
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

function formatAddresses(address: IAddress): string {
  const {num, street, city} = address
  return `${num} ${street} ${city}`
}

parallel.from(addresses)
  .map(formatAddresses)
  .subscribe((subresult, taskIndex) => console.log(`The result of the task ${taskIndex} is`, subresult))
  .then(result => console.log(result))


// Output:
// The result of the task 2 is [ '100 10th Ave. Boulder' ]
// The result of the task 0 is [ '123 Main St. Boulder' ]
// The result of the task 1 is [ '555 Elm St. Boulder' ]
// [ '123 Main St. Boulder',
//   '555 Elm St. Boulder',
//   '100 10th Ave. Boulder' ]
