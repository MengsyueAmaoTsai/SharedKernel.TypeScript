import { ErrorBase } from "../Error";

/**
 * Represents a value that can either be a successful value or an error.
 * @template TValue The type of the value.
 */
export class ErrorOr<TValue> {
    private readonly _hasError: boolean;
    private readonly _errors: ErrorBase[];
    private readonly _value: TValue | undefined | null;

    private constructor(
        has_error: boolean,
        errors: ErrorBase[],
        value: TValue | undefined | null,
    ) {
        this._hasError = has_error;
        this._errors = errors;
        this._value = value;
    }

    /**
     * Gets a value indicating whether the ErrorOr instance has an error.
     */
    public get hasError(): boolean {
        return this._hasError;
    }

    /**
     * Gets a value indicating whether the ErrorOr instance has a value.
     */
    public get isValue(): boolean {
        return !this._hasError;
    }

    /**
     * Gets the errors associated with the ErrorOr instance.
     * @throws {Error} Throws an error if the ErrorOr instance does not have an error.
     */
    public get errors(): ErrorBase[] {
        if (!this._hasError) {
            throw new Error("Can not access errors on a value");
        }

        return this._errors;
    }

    /**
     * Gets the value associated with the ErrorOr instance.
     * @throws {Error} Throws an error if the ErrorOr instance has an error.
     */
    public get value(): TValue {
        if (this._hasError) {
            throw new Error("Can not access value on an error");
        }

        return this._value as TValue;
    }

    /**
     * Creates a new ErrorOr instance with a successful value.
     * @param value The value to be wrapped in the ErrorOr instance.
     * @returns A new ErrorOr instance with the specified value.
     */
    public static withValue<TValue>(value: TValue): ErrorOr<TValue> {
        return new ErrorOr<TValue>(false, [], value);
    }

    /**
     * Creates a new ErrorOr instance with an error.
     * @param error The error to be wrapped in the ErrorOr instance.
     * @returns A new ErrorOr instance with the specified error.
     * @throws {Error} Throws an error if the specified error is ErrorBase.Null.
     */
    public static withError<TValue>(error: ErrorBase): ErrorOr<TValue> {
        if (error === ErrorBase.Null) {
            throw new Error("Error can not be ErrorBase.Null");
        }

        return new ErrorOr<TValue>(true, [error], undefined);
    }

    /**
     * Creates a new ErrorOr instance with multiple errors.
     * @param errors The errors to be wrapped in the ErrorOr instance.
     * @returns A new ErrorOr instance with the specified errors.
     * @throws {Error} Throws an error if any of the specified errors are ErrorBase.Null.
     */
    public static withErrors<TValue>(errors: ErrorBase[]): ErrorOr<TValue> {
        if (errors.some((error) => error === ErrorBase.Null)) {
            throw new Error("Error can not be ErrorBase.Null");
        }

        return new ErrorOr<TValue>(true, errors, undefined);
    }
}
