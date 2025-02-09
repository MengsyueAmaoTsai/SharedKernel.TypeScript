/**
 * Represents an optional value that may or may not be present.
 * The Maybe class provides a way to handle null or undefined values in a type-safe manner.
 *
 * @template TValue - The type of the value wrapped by the Maybe.
 */
export class Maybe<TValue> {
	private readonly _hasValue: boolean;
	private readonly _value: TValue | undefined | null;

	private constructor(hasValue: boolean, value: TValue | undefined | null) {
		this._hasValue = hasValue;
		this._value = value;
	}

	/**
	 * Gets a value indicating whether the Maybe has a value.
	 */
	get hasValue(): boolean {
		return this._hasValue;
	}

	/**
	 * Gets a value indicating whether the Maybe is null.
	 */
	get isNull(): boolean {
		return !this._hasValue;
	}

	/**
	 * Gets the value wrapped by the Maybe.
	 * Throws an error if the Maybe is null or undefined.
	 */
	get value(): TValue {
		if (this._value === undefined || this._value === null) {
			throw new Error("Can not access value on a null Maybe");
		}

		return this._value;
	}

	/**
	 * Creates a new Maybe instance with the specified value.
	 *
	 * @param value - The value to wrap in the Maybe.
	 * @returns A Maybe instance containing the specified value.
	 */
	public static with<TValue>(value: TValue | null | undefined): Maybe<TValue> {
		if (value === undefined || value === null) {
			return Maybe.null<TValue>();
		}

		return new Maybe<TValue>(true, value);
	}

	/**
	 * Creates a new Maybe instance that represents a null value.
	 *
	 * @returns A Maybe instance representing a null value.
	 */
	public static null<TValue>(): Maybe<TValue> {
		return new Maybe<TValue>(false, null);
	}
}
