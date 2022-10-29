import { expect, test } from "@jest/globals";
import "dotenv/config";

/**
 * Examples unit test.
 */
test("simple_math", () => {
    const answer = 1 + 2;
    expect(answer).toBe(3);
});
