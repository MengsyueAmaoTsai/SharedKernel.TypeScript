import { ErrorBase } from "..";

/**
 * Represents the result of an operation that can either be successful or a failure.
 */
export class Result {
	private readonly _isSuccess: boolean;
	private readonly _error: ErrorBase;

	/**
	 * Constructs a new Result instance.
	 * @param isSuccess - Indicates whether the operation was successful.
	 * @param error - The error associated with the failure, if applicable.
	 */
	private constructor(isSuccess: boolean, error: ErrorBase) {
		this._isSuccess = isSuccess;
		this._error = error;
	}

	/**
	 * Creates a successful Result instance.
	 * @returns A Result instance representing a successful operation.
	 */
	public static success(): Result {
		return new Result(true, ErrorBase.Null);
	}

	/**
	 * Creates a failed Result instance.
	 * @param error - The error associated with the failure.
	 * @returns A Result instance representing a failed operation.
	 * @throws Error - If the provided error is ErrorBase.Null.
	 */
	public static failure(error: ErrorBase): Result {
		if (error === ErrorBase.Null) {
			throw new Error("Error cannot be ErrorBase.Null");
		}

		return new Result(false, error);
	}

	/**
	 * Gets a value indicating whether the operation was successful.
	 */
	get isSuccess(): boolean {
		return this._isSuccess;
	}

	/**
	 * Gets a value indicating whether the operation was a failure.
	 */
	get isFailure(): boolean {
		return !this._isSuccess;
	}

	/**
	 * Gets the error associated with the failure.
	 * @returns The error associated with the failure.
	 * @throws Error - If the operation was successful and there is no error.
	 */
	get error(): ErrorBase {
		if (this._isSuccess) {
			throw new Error("Can not access error on a successful result");
		}

		return this._error;
	}
}
