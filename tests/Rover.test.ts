import { Rover } from "../src/Rover";
import { Heading, TurnDirection } from "../src/types";

describe("Rover tests", () => {
  describe("turning", () => {
    it.each<{
      turnDirection: TurnDirection;
      currentHeading: Heading;
      expectedHeading: Heading;
    }>([
      { turnDirection: "L", currentHeading: "N", expectedHeading: "W" },
      { turnDirection: "L", currentHeading: "W", expectedHeading: "S" },
      { turnDirection: "L", currentHeading: "S", expectedHeading: "E" },
      { turnDirection: "L", currentHeading: "E", expectedHeading: "N" },
    ])(
      "should have a heading of $expectedHeading when turning $turnDirection from a heading of $currentHeading",
      ({ turnDirection, currentHeading, expectedHeading }) => {
        // Arrange
        const rover = new Rover(currentHeading);

        // Act
        rover.turn(turnDirection);

        // Assert
        expect(rover.currentHeading).toBe(expectedHeading);
      }
    );
  });
});
