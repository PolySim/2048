import { useState } from "react";

const createGrid = (length: 3 | 4 | 5 | 6) => {
  const grid: 0[][] = [];
  for (let i = 0; i < length; i++) {
    grid[i] = [];
    for (let j = 0; j < length; j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
};

export const useGrid = (length: 3 | 4 | 5 | 6) => {
  const [grid, setGrid] = useState<number[][]>(createGrid(length));

  const resetGrid = () => {
    setGrid(createGrid(length));
  };

  return { grid, resetGrid };
};
