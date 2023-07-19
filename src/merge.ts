export const merge = (collection1: number[], collection2: number[]): number[] =>  {
  const merged: number[] = [...collection1, ...collection2];
  
  for (let i = 0; i < merged.length - 1; i++) {
    let swapped: boolean = false;
    
    for (let j = 0; j < merged.length - i - 1; j++) {
      if (merged[j] > merged[j + 1]) {
        const temp: number = merged[j];
        merged[j] = merged[j + 1];
        merged[j + 1] = temp;
        swapped = true;
      }
    }
    
    if (!swapped) {
      break;
    }
  }
  
  return merged;
}