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
    ])(
      "should have a heading of $expectedHeading when turning $turnDirection from a heading of $currentHeading",
      () => {
        // Arrange
        const rover = new Rover("N");

        // Act
        rover.turn("L");

        // Assert
        expect(rover.currentHeading).toBe("W");
      }
    );
  });
});
