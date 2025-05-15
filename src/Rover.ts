export class Rover {
  heading = "N";

  turn(direction: "L"): void {
    if (direction === "L") {
      this.heading = "W";
    }
  }
}
