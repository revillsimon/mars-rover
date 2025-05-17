import { GridParser } from "./GridParser";
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
  private gridParser: GridParser;
  private _gridCoordinates: UpperRightPlateauCoordinates;
  private _roverA: RoverPosition;

  constructor({ grid, roverA }: MissionControlConfig) {
    this.gridParser = new GridParser();
    const [x, y] = this.gridParser.parseGridCoordinates(grid);
    this._gridCoordinates = { x, y };

    const [roverAXPosition, roverAYPosition, roverAHeading] =
      this.parseRoverCoordinates(roverA);
    this._roverA = {
      x: roverAXPosition,
      y: roverAYPosition,
      heading: roverAHeading,
    };
  }

  public get gridCoordinates(): UpperRightPlateauCoordinates {
    return this._gridCoordinates;
  }

  private parseRoverCoordinates(input: RoverInput): ParsedRoverCoordinates {
    const [x, y, heading] = input.split(" ");

    return [parseInt(x), parseInt(y), heading as Heading];
  }

  public get roverA() {
    return this._roverA;
  }
}
