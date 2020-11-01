const NOW = new Date()

interface INasdaq {
  name: string
  price: number
  timeStamp: Date
}

const pricesNASDAQ = [
  { name: "ANGI", price: 31.22, timeStamp: new Date(2011, 11, 15) },
  { name: "MSFT", price: 32.32, timeStamp: new Date(2011, 11, 15) },
  { name: "GOOG", price: 150.43, timeStamp: new Date(2011, 11, 15) },
  { name: "ANGI", price: 28.44, timeStamp: new Date(2011, 11, 16) },
  { name: "GOOG", price: 199.33, timeStamp: new Date(2011, 11, 16) },
  {
    name: "MSFT",
    price: 42.42,
    timeStamp: new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate() - 11),
  },
  {
    name: "MSFT",
    price: 54.32,
    timeStamp: new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate() - 10),
  },
  {
    name: "MSFT",
    price: 69.69,
    timeStamp: new Date(NOW.getFullYear(), NOW.getMonth(), NOW.getDate() - 4),
  },
]

function printRecord(price: INasdaq) {
  console.log(JSON.stringify(price, null, 2))
}

function exercise(
  pricesNASDAQ: INasdaq[],
  printRecord: (price: INasdaq) => void
) {
  const tenDaysAgo = new Date(
    NOW.getFullYear(),
    NOW.getMonth(),
    NOW.getDate() - 10
  )

  // use filter() to filter the trades for MSFT prices recorded any time after 10 days ago
  const microsoftPrices = pricesNASDAQ.filter(
    ({ timeStamp }) => tenDaysAgo <= timeStamp
  ) // finish this expression

  // Print the trades to the output console
  microsoftPrices.forEach(function (priceRecord) {
    printRecord(priceRecord)
  })
}

exercise(pricesNASDAQ, printRecord)
