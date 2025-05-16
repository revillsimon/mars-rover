import {
  Heading,
  TurnDirection,
  NextHeadingsLookup,
  RoverConfig,
} from "./types";

export class Rover {
  private _currentHeading: Heading;
  private _x: number;
  private _y: number;

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
    this._x = config.initialXPosition ?? 0;
    this._y = config.initialYPosition ?? 0;
  }

  public get currentHeading(): Heading {
    return this._currentHeading;
  }

  private set currentHeading(value: Heading) {
    this._currentHeading = value;
  }

  public get x(): number {
    return this._x;
  }

  private set x(value: number) {
    this._x = value;
  }

  public get y(): number {
    return this._y;
  }

  public turn(direction: TurnDirection): void {
    this.currentHeading =
      this.nextHeadingsLookup[direction][this.currentHeading];
  }

  public move(): void {
    if (this.currentHeading === "E") {
      this.x = this.x - 1;
    }

    if (this.currentHeading === "W") {
      this.x = this.x + 1;
    }
  }
}
