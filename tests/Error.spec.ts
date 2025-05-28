import { describe, expect, it } from "vitest";
import { ErrorBase, ErrorType } from "../src/";

describe("Error", () => {
	it("create - when given error type null should throw error", () => {
		expect(() =>
			ErrorBase.create(ErrorType.Null, "errorCode", "errorMessage"),
		).toThrow("Error type cannot be Null.");
	});

	it("create - when given empty error code should throw error", () => {
		expect(() =>
			ErrorBase.create(ErrorType.Validation, "", "errorMessage"),
		).toThrow("Error code cannot be null or empty.");
	});

	const validErrorTypes = [
		[ErrorType.Validation, "Validation"],
		[ErrorType.Unauthorized, "Unauthorized"],
		[ErrorType.AccessDenied, "AccessDenied"],
		[ErrorType.NotFound, "NotFound"],
		[ErrorType.MethodNotAllowed, "MethodNotAllowed"],
		[ErrorType.Conflict, "Conflict"],
		[ErrorType.UnsupportedMediaType, "UnsupportedMediaType"],
		[ErrorType.Unexpected, "Unexpected"],
		[ErrorType.Unavailable, "Unavailable"],
		[ErrorType.Timeout, "Timeout"],
	] as const;

	describe.each(validErrorTypes)(
		"create - should create an error for type %s",
		(errorType, typeName) => {
			it(`should create a ${typeName} error`, () => {
				const errorCode = "Error.Code";
				const errorMessage = "Error message";

				const error = ErrorBase.create(errorType, errorCode, errorMessage);

				expect(error.type).toBe(errorType);
				expect(error.code).toBe(errorCode);
				expect(error.message).toBe(errorMessage);
			});
		},
	);

	describe.each(validErrorTypes)(
		"Factory methods - should create correct error for type %s",
		(errorType, typeName) => {
			it(`should create a ${typeName} error using factory method`, () => {
				const customErrorCode = "Error.Code";
				const errorMessage = "Error message";

				const factoryMethod = (() => {
					switch (errorType) {
						case ErrorType.Validation:
							return ErrorBase.invalid;
						case ErrorType.Unauthorized:
							return ErrorBase.unauthorized;
						case ErrorType.AccessDenied:
							return ErrorBase.accessDenied;
						case ErrorType.NotFound:
							return ErrorBase.notFound;
						case ErrorType.MethodNotAllowed:
							return ErrorBase.methodNotAllowed;
						case ErrorType.Conflict:
							return ErrorBase.conflict;
						case ErrorType.UnsupportedMediaType:
							return ErrorBase.unsupportedMediaType;
						case ErrorType.Unexpected:
							return ErrorBase.unexpected;
						case ErrorType.Unavailable:
							return ErrorBase.unavailable;
						case ErrorType.Timeout:
							return ErrorBase.timeout;
					}
				})();

				if (!factoryMethod) {
					throw new Error("Factory method not found.");
				}

				const error1 = factoryMethod(customErrorCode, errorMessage);
				const error2 = factoryMethod(errorMessage);

				expect(error1.type).toBe(errorType);
				expect(error1.code).toBe(customErrorCode);
				expect(error1.message).toBe(errorMessage);

				expect(error2.type).toBe(errorType);
				expect(error2.code).toBe(typeName);
				expect(error2.message).toBe(errorMessage);
			});
		},
	);

	it("ErrorBase.Null - should return a Null error", () => {
		const error = ErrorBase.Null;

		expect(error.type).toBe(ErrorType.Null);
		expect(error.code).toBe("Null");
		expect(error.message).toBe("");
	});

	it("errors with same properties should be equal", () => {
		const sameCode = "Error.Code";
		const sameMessage = "Error message";

		const error1 = ErrorBase.invalid(sameCode, sameMessage);
		const error2 = ErrorBase.invalid(sameCode, sameMessage);
		expect(error1).toEqual(error2);
	});

	it("errors with different type should not be equal", () => {
		const error1 = ErrorBase.invalid("Error.Code", "Error message");
		const error2 = ErrorBase.unauthorized("Error.Code", "Error message");
		expect(error1).not.toEqual(error2);
	});

	it("errors with different code should not be equal", () => {
		const error1 = ErrorBase.invalid("Error.Code1", "Error message");
		const error2 = ErrorBase.invalid("Error.Code2", "Error message");
		expect(error1).not.toEqual(error2);
	});

	it("errors with different message should not be equal", () => {
		const error1 = ErrorBase.invalid("Error.Code", "Error message 1");
		const error2 = ErrorBase.invalid("Error.Code", "Error message 2");
		expect(error1).not.toEqual(error2);
	});
});
