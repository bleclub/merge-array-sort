import { merge } from './src/merge';

const collection1: number[] = [1, 3, 5, 9, 0];
const collection2: number[] = [2, 4, 6, 8,7, 10];
const merged: number[] = merge(collection1, collection2);

console.log(merged);