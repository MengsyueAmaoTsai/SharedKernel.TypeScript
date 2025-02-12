/**
 * Base class for value objects.
 */
export abstract class ValueObject {
	/**
	 * Checks if this value object is equal to another value object.
	 * @param other - The other value object to compare.
	 * @returns `true` if the value objects are equal, `false` otherwise.
	 */
	public equals(other: ValueObject) {
		if (other === null || other === undefined) {
			return false;
		}

		return (
			JSON.stringify(this.getAtomicValues()) ===
			JSON.stringify(other.getAtomicValues())
		);
	}

	/**
	 * Calculates the hash code for the value object.
	 * The hash code is calculated based on the string representation of the atomic values.
	 * @returns The hash code of the value object.
	 */
	public getHashCode(): number {
		return JSON.stringify(this.getAtomicValues())
			.split("")
			.reduce((hash, char) => ((hash << 5) - hash + char.charCodeAt(0)) | 0, 0);
	}

	protected abstract getAtomicValues(): unknown[];
}

/**
 * Represents a single value object.
 */
export abstract class SingleValueObject<TValue> extends ValueObject {
	protected constructor(public readonly value: TValue) {
		super();
	}

	/**
	 * Returns a string representation of the value object.
	 * @returns The string representation of the value object.
	 */
	public toString(): string {
		return String(this.value);
	}
}
