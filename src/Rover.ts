import {
  Heading,
  TurnDirection,
  NextHeadingsLookup,
  RoverConfig,
} from "./types";

export class Rover {
  private _currentHeading: Heading;

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
    this._currentHeading = config.initialHeading;
  }

  get currentHeading(): Heading {
    return this._currentHeading;
  }

  set currentHeading(value: Heading) {
    this._currentHeading = value;
  }

  turn(direction: TurnDirection): void {
    this.currentHeading =
      this.nextHeadingsLookup[direction][this.currentHeading];
  }
}
