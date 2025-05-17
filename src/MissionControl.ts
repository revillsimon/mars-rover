import { GridParser } from "./GridParser";
import { RoverParser } from "./RoverParser";
import {
  MissionControlConfig,
  RoverPosition,
  PlateauCoordinates,
} from "./types";

export class MissionControl {
  private gridParser: GridParser;
  private roverParser: RoverParser;
  private _gridCoordinates: PlateauCoordinates;
  private _roverA: RoverPosition;

  constructor({ grid, roverA }: MissionControlConfig) {
    this.gridParser = new GridParser();
    this.roverParser = new RoverParser();

    this._gridCoordinates = this.gridParser.parseGridCoordinates(grid);
    this._roverA = this.roverParser.parseRoverCoordinates(roverA);
  }

  public get gridCoordinates(): PlateauCoordinates {
    return this._gridCoordinates;
  }

  public get roverA() {
    return this._roverA;
  }
}
