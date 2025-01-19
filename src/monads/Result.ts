import type { ErrorBase } from "../Error";

export class Result {
	public static readonly success: Result = new Result(true, undefined);

	private constructor(
		public readonly isSuccess: boolean,
		private readonly _error: ErrorBase | undefined,
	) {}

	get error(): ErrorBase {
		if (!this._error) {
			throw new Error("No error in result");
		}

		return this._error;
	}

	public isFailure = !this.isSuccess;

	public static failure(error: ErrorBase): Result {
		return new Result(false, error);
	}
}
