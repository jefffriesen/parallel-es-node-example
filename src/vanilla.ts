import {cube} from './utils/cube'


function vanillaMath(value: number): number {
  return cube(value)
}

const abc = vanillaMath(2)
console.log('vanillaMath: ', abc)
