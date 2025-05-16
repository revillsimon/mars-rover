import { Rover } from "../src/Rover";
import { TurningInputTestData } from "./test-utils/types";

describe("Rover tests", () => {
  describe("turning", () => {
    it.each<TurningInputTestData>([
      { turnDirection: "L", currentHeading: "N", expectedHeading: "W" },
      { turnDirection: "L", currentHeading: "W", expectedHeading: "S" },
      { turnDirection: "L", currentHeading: "S", expectedHeading: "E" },
      { turnDirection: "L", currentHeading: "E", expectedHeading: "N" },
      { turnDirection: "R", currentHeading: "N", expectedHeading: "E" },
      { turnDirection: "R", currentHeading: "E", expectedHeading: "S" },
      { turnDirection: "R", currentHeading: "S", expectedHeading: "W" },
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
