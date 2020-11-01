import "./lib/h"

declare global {
  interface ArrayConstructor {
    zip<T, U, V>(
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

Array.zip = function (left, right, combinerFunction) {
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

/* console.log(
  JSON.stringify(
    Array.zip([1, 2, 3], [4, 5, 6], function (left, right) {
      return left + right
    })
  ) === "[5,7,9]"
) */

export {}
