import {
  Heading,
  TurnDirection,
  NextHeadingsLookup,
  RoverConfig,
} from "./types";

export class Rover {
  currentHeading: Heading;

  private readonly nextHeadingsLookup: NextHeadingsLookup = {
    L: {
      N: "W",
      W: "S",
      S: "E",
      E: "N",
    },
    R: {
      N: "E",
      E: "S",
      S: "W",
      W: "N",
    },
  };

  constructor(config: RoverConfig) {
    this.currentHeading = config.initialHeading;
  }

  turn(direction: TurnDirection): void {
    this.currentHeading =
      this.nextHeadingsLookup[direction][this.currentHeading];
  }
}
