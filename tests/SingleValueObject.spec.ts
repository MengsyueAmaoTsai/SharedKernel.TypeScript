import { describe, expect, it } from "vitest";
import { SingleValueObject } from "../src";

class TestSingleValueObject extends SingleValueObject<string> {
	protected getAtomicValues(): unknown[] {
		return [this.value];
	}

	public static create(value: string): TestSingleValueObject {
		return new TestSingleValueObject(value);
	}
}

describe("SingleValueObject", () => {
	it("toString - should return the value as string", () => {
		const valueObject = TestSingleValueObject.create("string");

		expect(valueObject.toString()).toBe("string");
	});
});
