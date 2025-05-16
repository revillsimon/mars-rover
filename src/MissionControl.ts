import { MissionControlConfig } from "./types";

export class MissionControl {
  private _upperRightPlateauCoordinates: { x: number; y: number };

  constructor({ grid }: MissionControlConfig) {
    const [x, y] = this.parseGridCoordinates(grid);

    this._upperRightPlateauCoordinates = { x, y };
  }

  private parseGridCoordinates(input: string): [number, number] {
    const [x, y] = input.split(" ").map((number) => parseInt(number));
    return [x, y];
  }

  public get upperRightPlateauCoordinates(): { x: number; y: number } {
    return this._upperRightPlateauCoordinates;
  }
}
