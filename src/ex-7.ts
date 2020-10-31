declare global {
  interface Array<T> {
    myFilter(
      predicate: (value: T, index: number, array: T[]) => unknown,
      thisArg?: any
    ): T[]
  }
}

Array.prototype.filter

Array.prototype.myFilter = function (predicateFunction) {
  const results: any[] = []
  this.forEach(function (item, index, array) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------
    if (predicateFunction(item, index, array)) results.push(item)
  })

  return results
}

/* console.log(
  JSON.stringify(
    [1, 2, 3].filter(function (x) {
      return x > 2
    })
  ) === "[3]"
) */

export {}
