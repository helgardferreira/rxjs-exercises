import "./lib/h"

function exercise() {
  const ratings = [2, 3, 1, 4, 5]

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.hReduce((acc, cur) => {
    return acc > cur ? acc : cur
  }, -1) // Complete this expression
}

console.log(exercise())
