import { ErrorBase } from "..";

export class Result {
	private readonly _isSuccess: boolean;
	private readonly _error: ErrorBase;

	private constructor(isSuccess: boolean, error: ErrorBase) {
		this._isSuccess = isSuccess;
		this._error = error;
	}

	public static success(): Result {
		return new Result(true, ErrorBase.Null);
	}

	public static failure(error: ErrorBase): Result {
		if (error === ErrorBase.Null) {
			throw new Error("Error cannot be ErrorBase.Null");
		}

		return new Result(false, error);
	}

	get isSuccess(): boolean {
		return this._isSuccess;
	}

	get isFailure(): boolean {
		return !this._isSuccess;
	}

	get error(): ErrorBase {
		if (this._isSuccess) {
			throw new Error("Can not access error on a successful result");
		}

		return this._error;
	}
}
