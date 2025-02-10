import { describe, expect, it } from "vitest";
import { Maybe } from "../../src/monads/Maybe";

describe("Maybe<TValue>", () => {
	const nullValues = [null, undefined];

	it.each(nullValues)("with %p value should return null maybe", (value) => {
		const maybe = Maybe.with<number>(value);

		expect(maybe.hasValue).toBe(false);
		expect(maybe.isNull).toBe(true);
		expect(() => maybe.value).toThrowError(
			"Can not access value on a null Maybe",
		);
	});

	it("with non-null value should return maybe with value", () => {
		const value = 42;
		const maybe = Maybe.with(value);

		expect(maybe.hasValue).toBe(true);
		expect(maybe.isNull).toBe(false);
		expect(maybe.value).toBe(value);
	});

	it("null should return null maybe", () => {
		const maybe = Maybe.null<number>();

		expect(maybe.hasValue).toBe(false);
		expect(maybe.isNull).toBe(true);
		expect(() => maybe.value).toThrowError(
			"Can not access value on a null Maybe",
		);
	});

	it("maybes with the same value should be equal", () => {
		const value = 42;
		const maybe1 = Maybe.with(value);
		const maybe2 = Maybe.with(value);

		expect(maybe1).toEqual(maybe2);
	});

	it("maybes with different values should not be equal", () => {
		const maybe1 = Maybe.with(42);
		const maybe2 = Maybe.with(43);

		expect(maybe1).not.toEqual(maybe2);
	});

	it("null maybes should be equal", () => {
		const maybe1 = Maybe.null<number>();
		const maybe2 = Maybe.null<number>();

		expect(maybe1).toEqual(maybe2);
	});

	it("null maybe should not be equal to maybe with value", () => {
		const maybe1 = Maybe.null<number>();
		const maybe2 = Maybe.with(42);

		expect(maybe1).not.toEqual(maybe2);
	});
});
