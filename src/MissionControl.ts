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
  private _upperRightPlateauCoordinates: UpperRightPlateauCoordinates;
  private _roverA: RoverPosition;

  constructor({ grid, roverA }: MissionControlConfig) {
    this.gridParser = new GridParser();
    const [x, y] = this.gridParser.parseGridCoordinates(grid);
    this._upperRightPlateauCoordinates = { x, y };

    const [roverAXPosition, roverAYPosition, roverAHeading] =
      this.parseRoverCoordinates(roverA);
    this._roverA = {
      x: roverAXPosition,
      y: roverAYPosition,
      heading: roverAHeading,
    };
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
