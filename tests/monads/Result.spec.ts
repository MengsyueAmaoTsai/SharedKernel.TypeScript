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

	it("failure should create failure result", () => {
		const error = ErrorBase.invalid("Invalid operation");
		const result = Result.failure(error);

		expect(result.isSuccess).toBe(false);
		expect(result.isFailure).toBe(true);
		expect(result.error).toBe(error);
	});

	it("success results should be equal", () => {
		const result1 = Result.success();
		const result2 = Result.success();

		expect(result1).toEqual(result2);
	});

	it("failure results with same error should be equal", () => {
		const error = ErrorBase.invalid("Invalid operation");
		const result1 = Result.failure(error);
		const result2 = Result.failure(error);

		expect(result1).toEqual(result2);
	});

	it("failure results with different errors should not be equal", () => {
		const error1 = ErrorBase.invalid("Invalid operation");
		const error2 = ErrorBase.invalid("Invalid operation2");
		const result1 = Result.failure(error1);
		const result2 = Result.failure(error2);

		expect(result1).not.toEqual(result2);
	});

	it("success result should not be equal to failure result", () => {
		const error = ErrorBase.invalid("Invalid operation");
		const success = Result.success();
		const failure = Result.failure(error);

		expect(success).not.toEqual(failure);
	});
});
