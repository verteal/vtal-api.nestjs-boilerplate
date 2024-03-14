/**
 * An abstract class representing a list that can watch and track changes to its items.
 * It can identify new, existing, and removed items compared to an initial state.
 */
export abstract class WatchedList<T> {
  public currentItems: T[]
  private initial: T[]
  private new: T[]
  private removed: T[]

  /**
   * Initializes the watched list with initial items.
   * @param initialItems The initial set of items in the list.
   */
  constructor(initialItems?: T[]) {
    this.currentItems = initialItems || []
    this.initial = initialItems || []
    this.new = []
    this.removed = []
  }

  /**
   * Abstract method to compare two items. Must be implemented by subclasses.
   * This method defines how two items in the list are considered equal.
   * @param a The first item to compare.
   * @param b The second item to compare.
   * @returns A boolean indicating if the items are considered equal.
   */
  abstract compareItems(a: T, b: T): boolean

  /**
   * Gets the current items in the list.
   * @returns An array of current items.
   */
  public getItems(): T[] {
    return this.currentItems
  }

  /**
   * Gets the new items that have been added to the list since its initialization.
   * @returns An array of new items.
   */
  public getNewItems(): T[] {
    return this.new
  }

  /**
   * Gets the items that have been removed from the list since its initialization.
   * @returns An array of removed items.
   */
  public getRemovedItems(): T[] {
    return this.removed
  }

  private isCurrentItem(item: T): boolean {
    return (
      this.currentItems.filter((v: T) => this.compareItems(item, v)).length !==
      0
    )
  }

  private isNewItem(item: T): boolean {
    return this.new.filter((v: T) => this.compareItems(item, v)).length !== 0
  }

  private isRemovedItem(item: T): boolean {
    return (
      this.removed.filter((v: T) => this.compareItems(item, v)).length !== 0
    )
  }

  private removeFromNew(item: T): void {
    this.new = this.new.filter((v) => !this.compareItems(v, item))
  }

  private removeFromCurrent(item: T): void {
    this.currentItems = this.currentItems.filter(
      (v) => !this.compareItems(item, v)
    )
  }

  private removeFromRemoved(item: T): void {
    this.removed = this.removed.filter((v) => !this.compareItems(item, v))
  }

  private wasAddedInitially(item: T): boolean {
    return (
      this.initial.filter((v: T) => this.compareItems(item, v)).length !== 0
    )
  }

  /**
   * Checks if an item currently exists in the list.
   * @param item The item to check for existence.
   * @returns A boolean indicating if the item exists in the current list.
   */
  public exists(item: T): boolean {
    return this.isCurrentItem(item)
  }

  /**
   * Adds an item to the list. If the item was previously removed, it is taken off the removed list.
   * If the item is new and was not added initially, it is added to the new items list.
   * @param item The item to add.
   */
  public add(item: T): void {
    if (this.isRemovedItem(item)) {
      this.removeFromRemoved(item)
    }

    if (!this.isNewItem(item) && !this.wasAddedInitially(item)) {
      this.new.push(item)
    }

    if (!this.isCurrentItem(item)) {
      this.currentItems.push(item)
    }
  }

  /**
   * Removes an item from the list. If the item was new, it is also taken off the new items list.
   * If the item was not new, it is added to the removed items list.
   * @param item The item to remove.
   */
  public remove(item: T): void {
    this.removeFromCurrent(item)

    if (this.isNewItem(item)) {
      this.removeFromNew(item)

      return
    }

    if (!this.isRemovedItem(item)) {
      this.removed.push(item)
    }
  }

  /**
   * Updates the entire list based on a new set of items.
   * Identifies and updates the lists of new and removed items accordingly.
   * @param items The new set of items to update the list with.
   */
  public update(items: T[]): void {
    const newItems = items.filter((a) => {
      return !this.getItems().some((b) => this.compareItems(a, b))
    })

    const removedItems = this.getItems().filter((a) => {
      return !items.some((b) => this.compareItems(a, b))
    })

    this.currentItems = items
    this.new = newItems
    this.removed = removedItems
  }
}
