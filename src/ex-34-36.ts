import { Observable } from "rxjs"

function exercise(window: Window, $: JQueryStatic) {
  const getJSON = function (url: string) {
    return new Observable(function (observer) {
      let subscribed = true

      $.getJSON(url, {
        success: function (data: any) {
          // If client is still interested in the results, send them.
          if (subscribed) {
            // Send data to the client
            observer.next(data)
            // Immediately complete the sequence
            observer.complete()
          }
        },
        error: function (ex: Error) {
          // If client is still interested in the results, send them.
          if (subscribed) {
            // Inform the client that an error occurred.
            observer.error(ex)
          }
        },
      })

      // Definition of the Subscription objects unsubscribe (dispose in RxJS 4) method.
      return function () {
        subscribed = false
      }
    })
  }

  const observer = {
    // onNext in RxJS 4
    next: function (data: any) {
      alert(JSON.stringify(data))
    },
    // onError in RxJS 4
    error: function (err: string) {
      alert(err)
    },
    // onComplete in RxJS 4
    complete: function () {
      alert("The asynchronous operation has completed.")
    },
  }

  const subscription = getJSON(
    "http://api-global.netflix.com/abTestInformation"
  ).subscribe(observer)

  setTimeout(function () {
    alert("Changed my mind, I do not want notifications any more!")
    subscription.unsubscribe()
  }, 10)
}
