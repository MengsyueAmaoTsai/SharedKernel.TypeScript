/**
 * Represents the types of errors that can occur.
 */
export enum ErrorType {
	Null = "Null",
	Validation = "Validation",
	Unauthorized = "Unauthorized",
	AccessDenied = "AccessDenied",
	NotFound = "NotFound",
	MethodNotAllowed = "MethodNotAllowed",
	Conflict = "Conflict",
	UnsupportedMediaType = "UnsupportedMediaType",
	Unexpected = "Unexpected",
	Unavailable = "Unavailable",
	Timeout = "Timeout",
}

/**
 * Represents a base error class with common error types and utility methods.
 */
/**
 * Represents a base error class.
 */
export class ErrorBase {
	/**
	 * Represents a null error.
	 */
	public static readonly Null = new ErrorBase(
		ErrorType.Null,
		ErrorType.Null.toString(),
		"",
	);

	/**
	 * Creates a new instance of the ErrorBase class.
	 * @param type The type of the error.
	 * @param code The error code.
	 * @param message The error message.
	 */
	private constructor(
		public readonly type: ErrorType,
		public readonly code: string,
		public readonly message: string,
	) {}

	/**
	 * Creates a new instance of the ErrorBase class.
	 * @param type The type of the error.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class.
	 * @throws Error if the error type is Null or the error code is null or empty.
	 */
	public static create(
		type: ErrorType,
		code: string,
		message: string,
	): ErrorBase {
		if (type === ErrorType.Null) {
			throw new Error("Error type cannot be Null.");
		}

		if (!code) {
			throw new Error("Error code cannot be null or empty.");
		}

		return new ErrorBase(type, code, message);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Validation type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Validation type.
	 */
	public static invalid(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Validation type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Validation type.
	 */
	public static invalid(message: string): ErrorBase;

	public static invalid(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.Validation,
				ErrorType.Validation.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.Validation, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Unauthorized type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Unauthorized type.
	 */
	public static unauthorized(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Unauthorized type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Unauthorized type.
	 */
	public static unauthorized(message: string): ErrorBase;

	public static unauthorized(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.Unauthorized,
				ErrorType.Unauthorized.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.Unauthorized, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.AccessDenied type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.AccessDenied type.
	 */
	public static accessDenied(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.AccessDenied type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.AccessDenied type.
	 */
	public static accessDenied(message: string): ErrorBase;

	public static accessDenied(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.AccessDenied,
				ErrorType.AccessDenied.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.AccessDenied, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.NotFound type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.NotFound type.
	 */
	public static notFound(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.NotFound type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.NotFound type.
	 */
	public static notFound(message: string): ErrorBase;

	public static notFound(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.NotFound,
				ErrorType.NotFound.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.NotFound, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.MethodNotAllowed type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.MethodNotAllowed type.
	 */
	public static methodNotAllowed(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.MethodNotAllowed type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.MethodNotAllowed type.
	 */
	public static methodNotAllowed(message: string): ErrorBase;

	public static methodNotAllowed(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.MethodNotAllowed,
				ErrorType.MethodNotAllowed.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.MethodNotAllowed, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Conflict type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Conflict type.
	 */
	public static conflict(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Conflict type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Conflict type.
	 */
	public static conflict(message: string): ErrorBase;

	public static conflict(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.Conflict,
				ErrorType.Conflict.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.Conflict, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.UnsupportedMediaType type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.UnsupportedMediaType type.
	 */
	public static unsupportedMediaType(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.UnsupportedMediaType type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.UnsupportedMediaType type.
	 */
	public static unsupportedMediaType(message: string): ErrorBase;

	public static unsupportedMediaType(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.UnsupportedMediaType,
				ErrorType.UnsupportedMediaType.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.UnsupportedMediaType, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Unexpected type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Unexpected type.
	 */
	public static unexpected(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Unexpected type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Unexpected type.
	 */
	public static unexpected(message: string): ErrorBase;

	public static unexpected(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.Unexpected,
				ErrorType.Unexpected.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.Unexpected, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Unavailable type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Unavailable type.
	 */
	public static unavailable(code: string, message: string): ErrorBase;

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Unavailable type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Unavailable type.
	 */
	public static unavailable(message: string): ErrorBase;

	public static unavailable(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.Unavailable,
				ErrorType.Unavailable.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.Unavailable, arg1, arg2);
	}

	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Timeout type.
	 * @param code The error code.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Timeout type.
	 */
	public static timeout(code: string, message: string): ErrorBase;
	/**
	 * Creates a new instance of the ErrorBase class with the ErrorType.Timeout type.
	 * @param message The error message.
	 * @returns A new instance of the ErrorBase class with the ErrorType.Timeout type.
	 */
	public static timeout(message: string): ErrorBase;
	public static timeout(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.Timeout,
				ErrorType.Timeout.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.Timeout, arg1, arg2);
	}
}
