import "./ex-10"

declare global {
  interface Array<T> {
    concatMap<U>(projectionFn: (item: T, index: number, source: T[]) => U): U
  }
}

Array.prototype.concatMap = function (projectionFunctionThatReturnsArray) {
  return (
    this.map<any>(function (...props) {
      // ------------   INSERT CODE HERE!  ----------------------------
      // Apply the projection function to each item. The projection
      // function will return a new child array. This will create a
      // two-dimensional array.
      // ------------   INSERT CODE HERE!  ----------------------------
      return projectionFunctionThatReturnsArray(...props)
    })
      // apply the concatAll function to flatten the two-dimensional array
      .concatAll()
  )
}

const spanishFrenchEnglishWords = [
  ["cero", "rien", "zero"],
  ["uno", "un", "one"],
  ["dos", "deux", "two"],
]
// collect all the words for each number, in every language, in a single, flat list
const allWords = [0, 1, 2].concatMap(function (index) {
  return spanishFrenchEnglishWords[index]
})

console.log(
  JSON.stringify(allWords) ===
    '["cero","rien","zero","uno","un","one","dos","deux","two"]'
)

export {}
