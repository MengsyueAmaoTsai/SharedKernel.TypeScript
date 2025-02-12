import { describe, expect, it } from "vitest";
import { ErrorBase } from "../../src";
import { ErrorOr } from "../../src/monads";

describe("ErrorOr", () => {
	it("with value - should create error or with value", () => {
		const value = 1;
		const errorOr = ErrorOr.withValue<number>(value);

		expect(errorOr.hasError).toBe(false);
		expect(errorOr.isValue).toBe(true);
		expect(() => errorOr.errors).toThrowError(
			"Can not access errors on a value",
		);

		expect(errorOr.value).toBe(value);
	});

	it("with error - should create error or with error", () => {
		const error = ErrorBase.invalid("error");
		const errorOr = ErrorOr.withError<number>(error);

		expect(errorOr.hasError).toBe(true);
		expect(errorOr.isValue).toBe(false);
		expect(() => errorOr.value).toThrowError(
			"Can not access value on an error",
		);

		expect(errorOr.errors).toEqual([error]);
	});

	it("with errors - should create error or with errors", () => {
		const errors = [ErrorBase.invalid("error1"), ErrorBase.invalid("error2")];
		const errorOr = ErrorOr.withErrors<number>(errors);

		expect(errorOr.hasError).toBe(true);
		expect(errorOr.isValue).toBe(false);
		expect(() => errorOr.value).toThrowError(
			"Can not access value on an error",
		);

		expect(errorOr.errors).toEqual(errors);
	});

	it("with error - given null error should throw exception", () => {
		expect(() => ErrorOr.withError<number>(ErrorBase.Null)).toThrowError(
			"Error can not be ErrorBase.Null",
		);
	});

	it("with errors - given errors containing null should throw exception", () => {
		expect(() => ErrorOr.withErrors<number>([ErrorBase.Null])).toThrowError(
			"Error can not be ErrorBase.Null",
		);
	});

	it("error ors with same value should be equal", () => {
		const value = 42;
		const errorOr1 = ErrorOr.withValue(value);
		const errorOr2 = ErrorOr.withValue(value);

		expect(errorOr1).toEqual(errorOr2);
	});

	it("error ors with different values should not be equal", () => {
		const errorOr1 = ErrorOr.withValue(42);
		const errorOr2 = ErrorOr.withValue(43);

		expect(errorOr1).not.toEqual(errorOr2);
	});

	it("error ors with same error should be equal", () => {
		const error = ErrorBase.invalid("error");
		const errorOr1 = ErrorOr.withError<number>(error);
		const errorOr2 = ErrorOr.withError<number>(error);

		expect(errorOr1).toEqual(errorOr2);
	});

	it("error ors with different errors should not be equal", () => {
		const errorOr1 = ErrorOr.withError<number>(ErrorBase.invalid("error1"));
		const errorOr2 = ErrorOr.withError<number>(ErrorBase.invalid("error2"));

		expect(errorOr1).not.toEqual(errorOr2);
	});
});
