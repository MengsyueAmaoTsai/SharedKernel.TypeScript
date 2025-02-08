export enum ErrorType {
	None = "None",
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
	public static readonly None = new ErrorBase(ErrorType.None, "", "");

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
		if (type === ErrorType.None) {
			throw new Error("Error type cannot be None.");
		}

		return new ErrorBase(type, code, message);
	}
}
