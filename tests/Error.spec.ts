import { describe, expect, it } from "vitest";
import { ErrorBase, ErrorType } from "../src/index";

describe("Error", () => {
	const ERROR_MESSAGE = "error message";

	it("equals when with same types and same messages should return true", () => {
		const error1 = ErrorBase.invalid("invalid");
		const error2 = ErrorBase.invalid("invalid");

		expect(JSON.stringify(error1) === JSON.stringify(error2)).toBe(true);
	});

	it("equals when with same types and different messages should return false", () => {
		const error1 = ErrorBase.invalid("invalid");
		const error2 = ErrorBase.invalid("invalid2");

		expect(JSON.stringify(error1) === JSON.stringify(error2)).toBe(false);
	});

	it("equals when with different types and different messages should return false", () => {
		const error1 = ErrorBase.invalid("invalid");
		const error2 = ErrorBase.invalid("invalid2");

		expect(JSON.stringify(error1) === JSON.stringify(error2)).toBe(false);
	});

	it("equals when with different types and same messages should return false", () => {
		const error1 = ErrorBase.invalid("invalid");
		const error2 = ErrorBase.invalid("invalid");

		expect(JSON.stringify(error1) === JSON.stringify(error2)).toBe(true);
	});

	it("null should return null error", () => {
		const error = ErrorBase.Null;
		expect(error.type).toBe(ErrorType.Null);
		expect(error.code).toBe("NullValue");
		expect(error.message).toBe("");
	});

	it("invalid should return validation error", () => {
		const error = ErrorBase.invalid(ERROR_MESSAGE);
		expect(error.type).toBe(ErrorType.Validation);
		expect(error.code).toBe(ErrorType.Validation);
		expect(error.message).toBe(ERROR_MESSAGE);
	});

	it('unauthorized should return "Unauthorized" error', () => {
		const error = ErrorBase.unauthorized(ERROR_MESSAGE);
		expect(error.type).toBe(ErrorType.Unauthorized);
		expect(error.code).toBe(ErrorType.Unauthorized);
		expect(error.message).toBe(ERROR_MESSAGE);
	});

	it('forbidden should return "Forbidden" error', () => {
		const error = ErrorBase.forbidden(ErrorType.Forbidden, ERROR_MESSAGE);
		expect(error.type).toBe(ErrorType.Forbidden);
		expect(error.code).toBe(ErrorType.Forbidden);
		expect(error.message).toBe(ERROR_MESSAGE);
	});

	it('notFound should return "NotFound" error', () => {
		const error = ErrorBase.notFound(ErrorType.NotFound, ERROR_MESSAGE);
		expect(error.type).toBe(ErrorType.NotFound);
		expect(error.code).toBe(ErrorType.NotFound);
		expect(error.message).toBe(ERROR_MESSAGE);
	});

	it('conflict should return "Conflict" error', () => {
		const error = ErrorBase.conflict(ErrorType.Conflict, ERROR_MESSAGE);
		expect(error.type).toBe(ErrorType.Conflict);
		expect(error.code).toBe(ErrorType.Conflict);
		expect(error.message).toBe(ERROR_MESSAGE);
	});

	it('unexpected should return "Unexpected" error', () => {
		const error = ErrorBase.unexpected(ErrorType.Unexpected, ERROR_MESSAGE);
		expect(error.type).toBe(ErrorType.Unexpected);
		expect(error.code).toBe(ErrorType.Unexpected);
		expect(error.message).toBe(ERROR_MESSAGE);
	});

	it('unavailable should return "Unavailable" error', () => {
		const error = ErrorBase.unavailable(ErrorType.Unavailable, ERROR_MESSAGE);
		expect(error.type).toBe(ErrorType.Unavailable);
		expect(error.code).toBe(ErrorType.Unavailable);
		expect(error.message).toBe(ERROR_MESSAGE);
	});
});
