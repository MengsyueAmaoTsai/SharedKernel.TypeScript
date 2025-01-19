import { ErrorType } from "./ErrorType";

export class ErrorBase {
	public static readonly Null = new ErrorBase(ErrorType.Null, "NullValue", "");

	private constructor(
		public readonly type: ErrorType,
		public readonly code: string,
		public readonly message: string,
	) {}

	public static create(
		errorType: ErrorType,
		code: string,
		message: string,
	): ErrorBase {
		return new ErrorBase(errorType, code, message);
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

	public static forbidden(code: string, message: string): ErrorBase;
	public static forbidden(message: string): ErrorBase;
	public static forbidden(arg1: string, arg2?: string): ErrorBase {
		if (!arg2) {
			return ErrorBase.create(
				ErrorType.Forbidden,
				ErrorType.Forbidden.toString(),
				arg1,
			);
		}

		return ErrorBase.create(ErrorType.Forbidden, arg1, arg2);
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
