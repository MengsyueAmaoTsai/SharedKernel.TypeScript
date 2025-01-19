import { describe, expect, it } from "vitest";
import { ErrorBase } from "../src/index";
import { ResultT } from "../src/monads";

describe("Result", () => {
	const ERROR = ErrorBase.invalid("error");

	it("failure when given error should create failure result with error", () => {
		const result = ResultT.failure(ERROR);

		expect(result.isFailure).toBe(true);
		expect(result.isSuccess).toBe(false);
		expect(result.error).toBe(ERROR);
		expect(() => result.value).toThrow();
	});

	it("with when given value should create success result with value", () => {
		const result = ResultT.with(1);

		expect(result.isFailure).toBe(false);
		expect(result.value).toBe(1);
		expect(() => result.error).toThrow();
	});
});
