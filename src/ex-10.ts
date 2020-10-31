declare global {
  interface Array<T> {
    concatAll(): T
  }
}

Array.prototype.concatAll = function <U extends Array<any>>() {
  const results: U | any[] = []
  this.forEach(function (subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
    if (!(subArray instanceof Array)) {
      throw Error("concatAll must be used on a nested array")
    }

    subArray.forEach((item: any) => results.push(item))
  })

  return results
}

/* console.log(
  JSON.stringify(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ].concatAll()
  ) === "[1,2,3,4,5,6,7,8,9]"
) */
/* try {
  console.log([1, 2, 3].concatAll()) // throws an error because this is a one-dimensional array
} catch (e) {
  console.log(e)
} */

export {}
