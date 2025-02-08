export enum ErrorType {
	Null = "Null",
	Validation = "Validation",
	Unauthorized = "Unauthorized",
	Forbidden = "Forbidden",
	NotFound = "NotFound",
	MethodNotAllowed = "MethodNotAllowed",
	Conflict = "Conflict",
	UnsupportedMediaType = "UnsupportedMediaType",
	Unexpected = "Unexpected",
	Unavailable = "Unavailable",
}

export class ErrorBase {
	public static readonly Null = new ErrorBase(ErrorType.Null, "", "");

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
}
