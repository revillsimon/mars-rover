import { RoverInput, Heading, RoverPosition } from "./types";

export class RoverParser {
  public parseRoverCoordinates(input: RoverInput): RoverPosition {
    const [x, y, heading] = input.split(" ");

    return {
      x: parseInt(x),
      y: parseInt(y),
      heading: heading as Heading,
    };
  }
}
