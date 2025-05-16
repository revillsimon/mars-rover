import { Rover } from "../src/Rover";

describe("Rover tests", () => {
  describe("turning", () => {
    it("should have a heading of W when turning left from a heading of N", () => {
      // Arrange
      const rover = new Rover("N");

      // Act
      rover.turn("L");

      // Assert
      expect(rover.heading).toBe("W");
    });
  });

  it("should have a heading of S when turning left from a heading of W", () => {
    // Arrange
    const rover = new Rover("W");

    // Act
    rover.turn("L");

    // Assert
    expect(rover.heading).toBe("S");
  });
});
