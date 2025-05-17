import { RoverInput, ParsedRoverCoordinates, Heading } from "./types";

export class RoverParser {
  public parseRoverCoordinates(input: RoverInput): ParsedRoverCoordinates {
    const [x, y, heading] = input.split(" ");

    return [parseInt(x), parseInt(y), heading as Heading];
  }
}
