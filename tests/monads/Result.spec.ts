import { describe, expect, it } from "vitest";
import { ErrorBase } from "../../src";
import { Result } from "../../src/monads";

describe("Result", () => {
	it("success should create success result", () => {
		const result = Result.success();

		expect(result.isSuccess).toBe(true);
		expect(result.isFailure).toBe(false);

		expect(() => result.error).toThrow(
			"Can not access error on a successful result",
		);
	});

	it("failure when given null error should throw error", () => {
		expect(() => Result.failure(ErrorBase.Null)).toThrow(
			"Error cannot be ErrorBase.Null",
		);
	});
});
