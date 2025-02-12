import { describe, expect, it } from "vitest";
import { ValueObject } from "../src";

class TestValueObject extends ValueObject {
	public constructor(
		private readonly string: string,
		private readonly number: number,
	) {
		super();
	}

	protected getAtomicValues(): unknown[] {
		return [this.string, this.number];
	}
}

describe("ValueObject", () => {
	it("equals - when value objects have the same values should return true", () => {
		const valueObject1 = new TestValueObject("string", 1);
		const valueObject2 = new TestValueObject("string", 1);

		expect(valueObject1.equals(valueObject2)).toBe(true);
	});

	it("equals - when value objects have different values should return false", () => {
		const valueObject1 = new TestValueObject("string", 1);
		const valueObject2 = new TestValueObject("string", 2);

		expect(valueObject1.equals(valueObject2)).toBe(false);
	});

	it("getHashCode - when value objects have the same values should return same hash code", () => {
		const valueObject1 = new TestValueObject("string", 1);
		const valueObject2 = new TestValueObject("string", 1);

		expect(valueObject1.getHashCode()).toBe(valueObject2.getHashCode());
	});

	it("getHashCode - when value objects have different values should return different hash code", () => {
		const valueObject1 = new TestValueObject("string", 1);
		const valueObject2 = new TestValueObject("string", 2);

		expect(valueObject1.getHashCode()).not.toBe(valueObject2.getHashCode());
	});
});
