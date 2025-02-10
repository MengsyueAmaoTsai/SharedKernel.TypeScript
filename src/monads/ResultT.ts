import { ErrorBase } from "../Error";

/**
 * Represents a result that can either be a success or a failure.
 * The `ResultT` class is a generic class that allows you to define the type of the value.
 * It provides methods to check if the result is a success or a failure, access the error, and access the value.
 *
 * @template TValue - The type of the value.
 */
export class ResultT<TValue> {
	private readonly _isSuccess: boolean;
	private readonly _error: ErrorBase;
	private readonly _value: TValue | null | undefined;

	private constructor(
		isSuccess: boolean,
		error: ErrorBase,
		value: TValue | null | undefined,
	) {
		this._isSuccess = isSuccess;
		this._error = error;
		this._value = value;
	}

	/**
	 * Gets a value indicating whether the result is a success.
	 */
	get isSuccess(): boolean {
		return this._isSuccess;
	}

	/**
	 * Gets a value indicating whether the result is a failure.
	 */
	get isFailure(): boolean {
		return !this._isSuccess;
	}

	/**
	 * Gets the error associated with the result.
	 * Throws an error if the result is a success.
	 */
	get error(): ErrorBase {
		if (this._isSuccess) {
			throw new Error("Can not access error on a success Result");
		}

		return this._error;
	}

	/**
	 * Gets the value associated with the result.
	 * Throws an error if the result is a failure or the value is null or undefined.
	 */
	get value(): TValue {
		if (!this._isSuccess || this._value === undefined || this._value === null) {
			throw new Error("Can not access value on a null Result");
		}

		return this._value;
	}

	/**
	 * Creates a new success result with the specified value.
	 *
	 * @param value - The value of the result.
	 * @returns A new `ResultT` instance representing a success.
	 */
	public static success<TValue>(value: TValue): ResultT<TValue> {
		return new ResultT<TValue>(true, ErrorBase.Null, value);
	}

	/**
	 * Creates a new failure result with the specified error.
	 *
	 * @param error - The error of the result.
	 * @returns A new `ResultT` instance representing a failure.
	 */
	public static failure<TValue>(error: ErrorBase): ResultT<TValue> {
		return new ResultT<TValue>(false, error, undefined);
	}
}
