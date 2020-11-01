import { fromEvent } from "rxjs"
import { concatMap, takeUntil } from "rxjs/operators"

// "For every mouse down event on the sprite, retrieve only those mouse move events that occur before the next mouse up event."
function exercise(sprite: HTMLSpanElement, spriteContainer: HTMLDivElement) {
  const spriteMouseDowns = fromEvent<MouseEvent>(sprite, "mousedown"),
    spriteContainerMouseMoves = fromEvent<MouseEvent>(
      spriteContainer,
      "mousemove"
    ),
    spriteContainerMouseUps = fromEvent<MouseEvent>(spriteContainer, "mouseup"),
    spriteMouseDrags =
      // For every mouse down event on the sprite...
      spriteMouseDowns.pipe(
        concatMap(() =>
          spriteContainerMouseMoves.pipe(takeUntil(spriteContainerMouseUps))
        )
      )
  // -------------------------------------------------------- //					  INSERT CODE HERE // --------------------------------------------------------
  // Complete this expression...
  // For every mouse down event, return the mouse move event
  // sequence until a mouse up event occurs.

  // For each mouse drag event, move the sprite to the absolute page position.
  spriteMouseDrags.forEach(function (dragPoint) {
    sprite.style.left = dragPoint.pageX + "px"
    sprite.style.top = dragPoint.pageY + "px"
  })
}
