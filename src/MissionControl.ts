import {
  Heading,
  MissionControlConfig,
  ParsedGridCoordinates,
  ParsedRoverCoordinates,
  RoverInput,
  RoverPosition,
  UpperRightPlateauCoordinates,
} from "./types";

export class MissionControl {
  private _upperRightPlateauCoordinates: UpperRightPlateauCoordinates;

  private _roverA: RoverPosition;

  constructor({ grid, roverA }: MissionControlConfig) {
    const [x, y] = this.parseGridCoordinates(grid);
    this.validateGridCoordinates(x, y);
    this._upperRightPlateauCoordinates = { x, y };

    const [roverAXPosition, roverAYPosition, roverAHeading] =
      this.parseRoverCoordinates(roverA);
    this._roverA = {
      x: roverAXPosition,
      y: roverAYPosition,
      heading: roverAHeading,
    };
  }

  private validateGridCoordinates(
    x: number | undefined,
    y: number | undefined
  ): void {
    if (!x || !y) {
      throw new Error(
        "Invalid grid coordinates detected in config. Please enter two positive integers greater than or equal to 2, separated by a space."
      );
    }

    const hasInvalidGridSize = x < 2 || y < 2;

    if (hasInvalidGridSize) {
      throw new Error(
        "Invalid grid size detected in config. Grid dimensions must be greater than or equal to 2."
      );
    }
  }

  private parseGridCoordinates(input: string): ParsedGridCoordinates {
    const [x, y] = input.split(" ").map((number) => parseInt(number));

    return [x, y];
  }

  public get upperRightPlateauCoordinates(): UpperRightPlateauCoordinates {
    return this._upperRightPlateauCoordinates;
  }

  private parseRoverCoordinates(input: RoverInput): ParsedRoverCoordinates {
    const [x, y, heading] = input.split(" ");

    return [parseInt(x), parseInt(y), heading as Heading];
  }

  public get roverA() {
    return this._roverA;
  }
}
