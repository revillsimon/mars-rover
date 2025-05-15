import { Rover } from "../src/Rover";

describe("Rover tests", () => {
  describe("turning", () => {
    it("should have a heading of W when turning left from a heading of N", () => {
      // Arrange
      const rover = new Rover();

      // Act
      rover.turn("L");

      // Assert
      expect(rover.heading).toBe("W");
    });
  });
});
