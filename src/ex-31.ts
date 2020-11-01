import { fromEvent, Observable } from "rxjs"
import { takeUntil, filter } from "rxjs/operators"

interface INasdaq {
  name: string
}

function exercise(
  pricesNASDAQ: Observable<INasdaq>,
  printRecord: (price: INasdaq) => void,
  stopButton: HTMLButtonElement
) {
  const stopButtonClicks = fromEvent(stopButton, "click")
  const microsoftPrices = pricesNASDAQ
    .pipe(
      filter(function (priceRecord) {
        return priceRecord.name === "MSFT"
      }),
      takeUntil(stopButtonClicks)
    )
    .forEach(function (priceRecord) {
      printRecord(priceRecord)
    })
}
