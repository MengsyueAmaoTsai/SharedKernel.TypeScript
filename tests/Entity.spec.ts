import { describe, expect, it } from "vitest";
import { IDomainEvent, Entity, SingleValueObject } from "../src/";

class TestEntityId extends SingleValueObject<string> {
	public static create(id: string): TestEntityId {
		return new TestEntityId(id);
	}
}

class TestEntity extends Entity<TestEntityId> {
	public constructor(
		id: TestEntityId,
		public name: string,
	) {
		super(id);
	}
}

class TestDomainEvent implements IDomainEvent {}

describe("Entity", () => {
	it("raiseDomainEvent - should add domain event", () => {
		const entity = new TestEntity(TestEntityId.create("1"), "TestEntity");
		const domainEvent = new TestDomainEvent();

		entity.raiseDomainEvent(domainEvent);

		expect(entity.getDomainEvents()).toStrictEqual([domainEvent]);
	});

	it("clearDomainEvents - should clear domain events", () => {
		const entity = new TestEntity(TestEntityId.create("1"), "TestEntity");
		const domainEvent = new TestDomainEvent();

		entity.raiseDomainEvent(domainEvent);
		entity.clearDomainEvents();

		expect(entity.getDomainEvents()).toStrictEqual([]);
	});

	it("equals - entities with same id should be equal", () => {
		const sameId = TestEntityId.create("1");
		const entity1 = new TestEntity(sameId, "TestEntity");
		const entity2 = new TestEntity(sameId, "TestEntity2");

		expect(entity1.equals(entity2)).toBe(true);
	});

	it("equals - entities with different id should not be equal", () => {
		const entity1 = new TestEntity(TestEntityId.create("1"), "TestEntity");
		const entity2 = new TestEntity(TestEntityId.create("2"), "TestEntity");

		expect(entity1.equals(entity2)).toBe(false);
	});

	it("getHashCode - entities with same id should have same hash code", () => {
		const sameId = TestEntityId.create("1");
		const entity1 = new TestEntity(sameId, "TestEntity");
		const entity2 = new TestEntity(sameId, "TestEntity2");

		expect(entity1.getHashCode()).toBe(entity2.getHashCode());
	});

	it("getHashCode - entities with different id should have different hash code", () => {
		const entity1 = new TestEntity(TestEntityId.create("1"), "TestEntity");
		const entity2 = new TestEntity(TestEntityId.create("2"), "TestEntity");

		expect(entity1.getHashCode()).not.toBe(entity2.getHashCode());
	});
});
