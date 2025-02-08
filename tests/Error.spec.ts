import { describe, expect, it } from "vitest";
import { ErrorBase, ErrorType } from "../src/";

describe("Error", () => {
	it("create should throw an error when given ErrorType.None", () => {
		expect(() =>
			ErrorBase.create(ErrorType.None, "errorCode", "errorMessage"),
		).toThrow("Error type cannot be None.");
	});

	const validErrorTypes = [
		ErrorType.Validation,
		ErrorType.Unauthorized,
		ErrorType.Forbidden,
		ErrorType.NotFound,
		ErrorType.MethodNotAllowed,
		ErrorType.Conflict,
		ErrorType.UnsupportedMediaType,
		ErrorType.Unexpected,
		ErrorType.Unavailable,
	];

	for (const errorType of validErrorTypes) {
		it(`create should return an Error instance for ${errorType}`, () => {
			const errorCode = "Error.Code";
			const errorMessage = "Error message";

			const error = ErrorBase.create(errorType, errorCode, errorMessage);

			expect(error.type).toBe(errorType);
			expect(error.code).toBe(errorCode);
			expect(error.message).toBe(errorMessage);
		});
	}
});
