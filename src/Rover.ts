import { Heading, TurnDirection } from "./types";

export class Rover {
  heading: Heading;

  constructor(initialHeading: Heading) {
    this.heading = initialHeading;
  }

  turn(direction: TurnDirection): void {
    if (direction === "L") {
      this.heading = this.heading === "N" ? "W" : "S";
    }
  }
}
