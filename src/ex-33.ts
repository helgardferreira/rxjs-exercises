import { fromEvent } from "rxjs"
import { concatMap, map, takeUntil } from "rxjs/operators"

function exercise(sprite: HTMLSpanElement, spriteContainer: HTMLDivElement) {
  // All of the mouse event sequences look like this:
  // seq([ {pageX: 22, pageY: 3423, layerX: 14, layerY: 22} ,,, ])
  const spriteMouseDowns = fromEvent<MouseEvent>(sprite, "mousedown"),
    spriteContainerMouseMoves = fromEvent<MouseEvent>(
      spriteContainer,
      "mousemove"
    ),
    spriteContainerMouseUps = fromEvent<MouseEvent>(spriteContainer, "mouseup"),
    // Create a sequence that looks like this:
    // seq([ {pageX: 22, pageY:4080 },,,{pageX: 24, pageY: 4082},,, ])
    spriteMouseDrags =
      // For every mouse down event on the sprite...
      spriteMouseDowns.pipe(
        concatMap(function (contactPoint) {
          // ...retrieve all the mouse move events on the sprite container...
          return spriteContainerMouseMoves.pipe(
            // ...until a mouse up event occurs.
            takeUntil(spriteContainerMouseUps),
            // ------------   INSERT CODE HERE  -----------------
            // Project each mouse move object into a new object
            // with adjusted pageX and pageY properties.
            // Translate each page coordinate based on the value
            // of the layerX and layerY properties in the
            // contactPoint.
            // -------------------------------------------------
            // Complete expression...
            map(({ pageX, pageY }) => ({
              pageX: pageX - contactPoint.offsetX,
              pageY: pageY - contactPoint.offsetY,
            }))
          )
        })
      )

  // For each mouse drag event, move the sprite to the absolute page position.
  spriteMouseDrags.forEach(function (dragPoint) {
    sprite.style.left = dragPoint.pageX + "px"
    sprite.style.top = dragPoint.pageY + "px"
  })
}
