declare global {
  interface Array<T> {
    hReduce<U = T>(
      combinerFn: (
        accumulatedValue: U,
        currentValue: T,
        index: number,
        source: T[]
      ) => U,
      initialValue?: U
    ): U[]

    hConcatAll(): T

    hConcatMap<U>(projectionFn: (item: T, index: number, source: T[]) => U): U
  }
}

declare global {
  interface ArrayConstructor {
    hZip<T, U, V>(
      left: T[],
      right: U[],
      combinerFn: (
        leftVal: T,
        rightVal: U,
        index: number,
        leftSource: T[],
        rightSource: U[]
      ) => V
    ): V[]
  }
}

Array.hZip = function (left, right, combinerFunction) {
  let counter
  const results = []

  for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
    // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
    if (left[counter] && right[counter])
      results.push(
        combinerFunction(left[counter], right[counter], counter, left, right)
      )
  }

  return results
}

Array.prototype.hConcatMap = function (projectionFunctionThatReturnsArray) {
  return (
    this.map<any>(function (...props) {
      // ------------   INSERT CODE HERE!  ----------------------------
      // Apply the projection function to each item. The projection
      // function will return a new child array. This will create a
      // two-dimensional array.
      // ------------   INSERT CODE HERE!  ----------------------------
      return projectionFunctionThatReturnsArray(...props)
    })
      // apply the hConcatAll function to flatten the two-dimensional array
      .hConcatAll()
  )
}

Array.prototype.hReduce = function (combiner, initialValue) {
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

Array.prototype.hConcatAll = function <U extends Array<any>>() {
  const results: U | any[] = []
  this.forEach(function (subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
    if (!(subArray instanceof Array)) {
      throw Error("hConcatAll must be used on a nested array")
    }

    subArray.forEach((item: any) => results.push(item))
  })

  return results
}

export {}
