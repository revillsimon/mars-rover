import {
  Heading,
  TurnDirection,
  NextHeadingsLookup,
  RoverConfig,
  NextMoveLocationLookup,
} from "./types";

export class Rover {
  private _currentHeading: Heading;
  private _x: number;
  private _y: number;

  private readonly nextHeadingsLookup: NextHeadingsLookup = {
    L: ["W", "S", "E", "N"],
    R: ["E", "S", "W", "N"],
  };

  constructor(config: RoverConfig) {
    this._currentHeading = config.initialHeading;
    this._x = config.initialXPosition;
    this._y = config.initialYPosition;
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

  private set y(value: number) {
    this._y = value;
  }

  private isOnXAxis(): boolean {
    return this.currentHeading === "W" || this.currentHeading === "E";
  }

  public turn(direction: TurnDirection): void {
    const headings = this.nextHeadingsLookup[direction];
    const nextIndex =
      (headings.indexOf(this._currentHeading) + 1) % headings.length;
    this.currentHeading = headings[nextIndex];
  }

  public move(): void {
    const nextMoveLocationLookup: NextMoveLocationLookup = {
      E: this.x - 1,
      W: this.x + 1,
      N: this.y + 1,
      S: this.y - 1,
    };

    if (this.isOnXAxis()) {
      this.x = nextMoveLocationLookup[this.currentHeading];
      return;
    }

    this.y = nextMoveLocationLookup[this.currentHeading];
  }
}
