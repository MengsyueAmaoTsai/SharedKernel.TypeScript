/**
 * Represents an object that can be compared for equality.
 * @template T - The type of the object being compared.
 */
export interface IEquitable<T> {
	/**
	 * Determines whether the current object is equal to the specified object.
	 * @param other - The object to compare to the current object.
	 * @returns `true` if the current object is equal to the specified object; otherwise, `false`.
	 */
	equals(other?: T | null): boolean;
}
