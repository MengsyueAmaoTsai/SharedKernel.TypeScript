import { describe, expect, it } from "vitest";
import { ErrorBase } from "../src/index";
import { Result } from "../src/monads";

describe("Result", () => {
	const ERROR = ErrorBase.invalid("error");

	it("failure when given error should create failure result with error", () => {
		const result = Result.failure(ERROR);

		expect(result.isFailure).toBe(true);
		expect(result.isSuccess).toBe(false);
		expect(result.error).toBe(ERROR);
	});

	it("success should create success result", () => {
		const result = Result.success;

		expect(result.isFailure).toBe(false);
		expect(result.isSuccess).toBe(true);
		expect(() => result.error).toThrow();
	});
});
