import { MissionControlConfig } from "./types";

export class MissionControl {
  private _upperRightPlateauCoordinates: { x: number; y: number };

  constructor({ grid }: MissionControlConfig) {
    const [x, y] = grid
      .split(" ")
      .map((numberString) => parseInt(numberString));

    this._upperRightPlateauCoordinates = { x, y };
  }

  public get upperRightPlateauCoordinates(): { x: number; y: number } {
    return this._upperRightPlateauCoordinates;
  }
}
