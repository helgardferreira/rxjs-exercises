import { fromEvent } from "rxjs"
import { tap } from "rxjs/operators"

function exercise(button: HTMLButtonElement) {
  const buttonClicks = fromEvent<Event>(button, "click")

  const subscription = buttonClicks
    .pipe(
      tap(function () {
        alert("Button was clicked. Stopping Traversal.")

        // Stop traversing the button clicks
        subscription.unsubscribe()
      })
    )
    .subscribe()
}
