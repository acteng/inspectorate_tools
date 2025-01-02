import { describe, expect, it } from "vitest";
import { calculateEffectiveSpeedLimit } from "./logic";

describe("calculateEffectiveSpeedLimit", () => {
  it("normal cases", () => {
    expect(calculateEffectiveSpeedLimit("50", 54)).toBe(50);
    expect(calculateEffectiveSpeedLimit("50", 56)).toBe(60);
  });

  it("highest entry", () => {
    expect(calculateEffectiveSpeedLimit("70", 78)).toBe(80);
  });

  it("lowest entry", () => {
    expect(calculateEffectiveSpeedLimit("<30", 15)).toBe(20);
    expect(calculateEffectiveSpeedLimit("<30", 25)).toBe(30);
  });
});
