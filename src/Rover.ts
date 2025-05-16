import { Heading, TurnDirection } from "./types";

export class Rover {
  currentHeading: Heading;

  constructor(initialHeading: Heading) {
    this.currentHeading = initialHeading;
  }

  turn(direction: TurnDirection): void {
    if (direction === "L") {
      const nextHeadingsLookup: Record<Heading, Heading> = {
        N: "W",
        W: "S",
        S: "E",
        E: "N",
      };

      this.currentHeading = nextHeadingsLookup[this.currentHeading];
    }
  }
}
