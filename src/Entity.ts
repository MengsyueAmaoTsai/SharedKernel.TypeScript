import type { IDomainEvent } from "./DomainEvent";
import { ValueObject } from "./ValueObject";
import type { IEquitable } from "./interfaces";

/**
 * Represents an entity in the domain.
 */
export interface IEntity {
	/**
	 * Gets the domain events associated with the entity.
	 * @returns An array of domain events.
	 */
	getDomainEvents(): IDomainEvent[];

	/**
	 * Raises a domain event for the entity.
	 * @param event - The domain event to be raised.
	 */
	raiseDomainEvent(event: IDomainEvent): void;

	/**
	 * Clears all the domain events associated with the entity.
	 */
	clearDomainEvents(): void;
}

/**
 * Represents an abstract base class for entities.
 * @template TId - The type of the entity's identifier.
 */
export abstract class Entity<TId> implements IEntity, IEquitable<Entity<TId>> {
	private readonly domainEvents: IDomainEvent[] = [];

	protected constructor(public readonly id: TId) {}

	/**
	 * Gets the domain events associated with the entity.
	 * @returns An array of domain events.
	 */
	public getDomainEvents(): IDomainEvent[] {
		return this.domainEvents;
	}

	/**
	 * Raises a domain event.
	 * @param event - The domain event to raise.
	 */
	public raiseDomainEvent(event: IDomainEvent): void {
		this.domainEvents.push(event);
	}

	/**
	 * Clears all domain events associated with the entity.
	 */
	public clearDomainEvents(): void {
		this.domainEvents.length = 0;
	}

	/**
	 * Determines whether the current entity is equal to another entity.
	 * @param other - The entity to compare with the current entity.
	 * @returns True if the entities are equal, false otherwise.
	 */
	public equals(other?: Entity<TId> | null | undefined): boolean {
		if (this === other) {
			return true;
		}

		if (other === null || other === undefined) {
			return false;
		}

		if (this.constructor !== other.constructor) {
			return false;
		}

		if (this.id instanceof ValueObject && other.id instanceof ValueObject) {
			return this.id.equals(other.id);
		}

		return this.id === other.id;
	}

	/**
	 * Gets the hash code for the current entity.
	 * @returns The hash code.
	 */
	public getHashCode(): number {
		if (this.id === null || this.id === undefined) {
			return 0;
		}

		let hash = 41;

		if (typeof this.id === "number") {
			hash = hash * 17 + this.id;
		} else if (typeof this.id === "string") {
			for (let i = 0; i < this.id.length; i++) {
				hash = hash * 17 + this.id.charCodeAt(i);
			}
		} else if (
			typeof this.id === "object" &&
			"getHashCode" in this.id &&
			typeof this.id.getHashCode === "function"
		) {
			hash = hash * 17 + this.id.getHashCode();
		} else {
			hash =
				hash * 17 +
				JSON.stringify(this.id)
					.split("")
					.reduce((acc, char) => acc + char.charCodeAt(0), 0);
		}

		return hash;
	}
}
