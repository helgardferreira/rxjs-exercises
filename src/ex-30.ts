import { fromEvent } from "rxjs"
import { take } from "rxjs/operators"

function exercise(button: HTMLButtonElement) {
  const buttonClicks = fromEvent(button, "click")

  // Use take() to listen for only one button click
  // and unsubscribe.
  buttonClicks
    .pipe(take(1))
    // Insert take() call here
    .forEach(function () {
      alert("Button was clicked once. Stopping Traversal.")
    })
}
