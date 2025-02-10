import { describe, expect, it } from "vitest";
import { ErrorBase } from "../../src/Error";
import { ResultT } from "../../src/monads/ResultT";

describe("Result<TValue>", () => {
	it("success should create success result", () => {
		const value = 42;
		const result = ResultT.success<number>(value);

		expect(result.isSuccess).toBe(true);
		expect(result.isFailure).toBe(false);
		expect(() => result.error).toThrowError(
			"Can not access error on a success Result",
		);
		expect(result.value).toBe(value);
	});

	it("failure should create failure result", () => {
		const error = ErrorBase.invalid("error");
		const result = ResultT.failure<number>(error);

		expect(result.isSuccess).toBe(false);
		expect(result.isFailure).toBe(true);
		expect(result.error).toBe(error);
		expect(() => result.value).toThrowError(
			"Can not access value on a null Result",
		);
	});

	it("results with same value should be equal", () => {
		const value = 42;
		const result1 = ResultT.success(value);
		const result2 = ResultT.success(value);

		expect(result1).toEqual(result2);
	});

	it("results with different values should not be equal", () => {
		const result1 = ResultT.success(42);
		const result2 = ResultT.success(43);

		expect(result1).not.toEqual(result2);
	});

	it("results with same error should be equal", () => {
		const error = ErrorBase.invalid("error");
		const result1 = ResultT.failure<number>(error);
		const result2 = ResultT.failure<number>(error);

		expect(result1).toEqual(result2);
	});

	it("results with different errors should not be equal", () => {
		const result1 = ResultT.failure<number>(ErrorBase.invalid("error1"));
		const result2 = ResultT.failure<number>(ErrorBase.invalid("error2"));

		expect(result1).not.toEqual(result2);
	});
});
