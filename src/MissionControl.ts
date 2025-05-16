import {
  MissionControlConfig,
  ParsedGridCoordinates,
  UpperRightPlateauCoordinates,
} from "./types";

export class MissionControl {
  private _upperRightPlateauCoordinates: UpperRightPlateauCoordinates;

  constructor({ grid }: MissionControlConfig) {
    const [x, y] = this.parseGridCoordinates(grid);

    this.validateGrid(x, y);

    this._upperRightPlateauCoordinates = { x, y };
  }

  private validateGrid(x: number, y: number): void {
    const hasNegativeGridCoordinates = x < 0 || y < 0;

    if (hasNegativeGridCoordinates) {
      throw new Error(
        "Negative grid number detected in config. Grid numbers must be positive integers."
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
}
