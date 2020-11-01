declare global {
  interface Array<T> {
    myReduce<U>(
      combinerFn: (
        accumulatedValue: U,
        currentValue: T,
        index: number,
        source: T[]
      ) => U,
      initialValue: U
    ): U[]
  }
}

Array.prototype.myReduce = function (combiner, initialValue) {
  let counter: number, accumulatedValue

  // If the array is empty, do nothing
  if (this.length === 0) {
    return this
  } else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1 || initialValue === undefined) {
      counter = 1
      accumulatedValue = this[0]
    } else if (arguments.length >= 2) {
      counter = 0
      accumulatedValue = initialValue
    } else {
      throw "Invalid arguments."
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one value.
    while (counter < this.length) {
      accumulatedValue = combiner(
        accumulatedValue,
        this[counter],
        counter,
        this
      )
      counter++
    }

    return [accumulatedValue]
  }
}
/* [1, 2, 3].myReduce(function (accumulatedValue, currentValue) {
  return accumulatedValue + currentValue
}, 0)[0] === 6 */
/* console.log(
  [1, 2, 3].myReduce(function (accumulatedValue, currentValue) {
    return accumulatedValue + currentValue
  }, 10)[0] === 16
) */

export {}
