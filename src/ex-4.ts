declare global {
  interface Array<T> {
    myMap<U>(projectionFn: (item: T, index: number, source: T[]) => U): U[]
  }
}

Array.prototype.myMap = function (projectionFunction) {
  const results: any[] = []
  this.forEach(function (...params) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the projectionFunction to each item in the array and add
    // each result to the results array.
    // Note: you can add items to an array with the push() method.
    // ------------ INSERT CODE HERE! ----------------------------
    results.push(projectionFunction(...params))
  })

  return results
}

console.log(
  JSON.stringify(
    [1, 2, 3].myMap(function (x) {
      return x + 1
    })
  ) === "[2,3,4]"
)

export {}
