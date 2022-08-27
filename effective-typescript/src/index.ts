type m = string | Date
type n = string | number

type T = Exclude<m, n>
type NonZeroNums = Exclude<number, 0> // Type is still just number
const a: NonZeroNums = 0 // no err