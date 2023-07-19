import { merge } from '../src/merge';

describe('merge', () => {
  it('should merge two sorted collections correctly', () => {
    const collection1: number[] = [1, 3, 5];
    const collection2: number[] = [2, 4, 6];
    const merged: number[] = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should merge collections with different lengths correctly', () => {
    const collection1: number[] = [1, 3, 5, 9];
    const collection2: number[] = [2, 4, 6, 8, 10];
    const merged: number[] = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6, 8, 9, 10]);
  });

  it('should merge collections with duplicate elements correctly', () => {
    const collection1: number[] = [1, 3, 3, 5];
    const collection2: number[] = [2, 3, 4, 6];
    const merged: number[] = merge(collection1, collection2);
    expect(merged).toEqual([1, 2, 3, 3, 3, 4, 5, 6]);
  });

  it('should merge empty collections correctly', () => {
    const collection1: number[] = [];
    const collection2: number[] = [];
    const merged: number[] = merge(collection1, collection2);
    expect(merged).toEqual([]);
  });
});
