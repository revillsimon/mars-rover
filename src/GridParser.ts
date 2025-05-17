import { PlateauCoordinates } from "./types";

export class GridParser {
  public parseGridCoordinates(input: string): PlateauCoordinates {
    const [x, y] = input.split(" ").map((number) => parseInt(number));

    this.validateGridCoordinates(x, y);

    return { x, y };
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
}
