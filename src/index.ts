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
}

export class ErrorBase {
	public static readonly Null = new ErrorBase(
		ErrorType.Null,
		ErrorType.Null.toString(),
		"",
	);

	private constructor(
		public readonly type: ErrorType,
		public readonly code: string,
		public readonly message: string,
	) {}

	public static create(
		type: ErrorType,
		code: string,
		message: string,
	): ErrorBase {
		if (type === ErrorType.Null) {
			throw new Error("Error type cannot be Null.");
		}

		return new ErrorBase(type, code, message);
	}

	public static invalid(code: string, message: string): ErrorBase;
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

	public static unauthorized(code: string, message: string): ErrorBase;
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

	public static accessDenied(code: string, message: string): ErrorBase;
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

	public static notFound(code: string, message: string): ErrorBase;
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

	public static methodNotAllowed(code: string, message: string): ErrorBase;
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

	public static conflict(code: string, message: string): ErrorBase;
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

	public static unsupportedMediaType(code: string, message: string): ErrorBase;
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

	public static unexpected(code: string, message: string): ErrorBase;
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

	public static unavailable(code: string, message: string): ErrorBase;
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
}
