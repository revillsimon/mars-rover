import { GridParser } from "./GridParser";
import { RoverParser } from "./RoverParser";
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
  private roverParser: RoverParser;
  private _gridCoordinates: UpperRightPlateauCoordinates;
  private _roverA: RoverPosition;

  constructor({ grid, roverA }: MissionControlConfig) {
    this.gridParser = new GridParser();
    this.roverParser = new RoverParser();

    const [x, y] = this.gridParser.parseGridCoordinates(grid);
    this._gridCoordinates = { x, y };

    const [roverAXPosition, roverAYPosition, roverAHeading] =
      this.roverParser.parseRoverCoordinates(roverA);
    this._roverA = {
      x: roverAXPosition,
      y: roverAYPosition,
      heading: roverAHeading,
    };
  }

  public get gridCoordinates(): UpperRightPlateauCoordinates {
    return this._gridCoordinates;
  }

  public get roverA() {
    return this._roverA;
  }
}
