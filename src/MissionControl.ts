import {
  MissionControlConfig,
  ParsedGridCoordinates,
  UpperRightPlateauCoordinates,
} from "./types";

export class MissionControl {
  private _upperRightPlateauCoordinates: UpperRightPlateauCoordinates;

  constructor({ grid }: MissionControlConfig) {
    const [x, y] = this.parseGridCoordinates(grid);

    this._upperRightPlateauCoordinates = { x, y };
  }

  private parseGridCoordinates(input: string): ParsedGridCoordinates {
    const [x, y] = input.split(" ").map((number) => parseInt(number));
    return [x, y];
  }

  public get upperRightPlateauCoordinates(): UpperRightPlateauCoordinates {
    return this._upperRightPlateauCoordinates;
  }
}
