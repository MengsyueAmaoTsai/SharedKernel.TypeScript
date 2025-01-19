import type { ErrorBase } from "../Error";

export class ResultT<TValue> {
	private constructor(
		public readonly isSuccess: boolean,
		private readonly _error: ErrorBase | undefined,
		private readonly _value: TValue | undefined,
	) {}

	get error(): ErrorBase {
		if (!this._error) {
			throw new Error("No error in result");
		}

		return this._error;
	}

	get value(): TValue {
		if (!this._value) {
			throw new Error("No value in result");
		}

		return this._value;
	}

	public isFailure = !this.isSuccess;

	public static with<TValue>(value: TValue): ResultT<TValue> {
		return new ResultT(true, undefined, value);
	}

	public static failure<TValue>(error: ErrorBase): ResultT<TValue> {
		return new ResultT(false, error, undefined as TValue);
	}
}

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
