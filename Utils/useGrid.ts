import { useEffect, useState } from "react";
import { ListNumber } from "../type";

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

const getAvailablePosition = (grid: number[][]) => {
  const availablePositions: { x: number; y: number }[] = [];

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell === 0) {
        availablePositions.push({ x: i, y: j });
      }
    }
  }
  return availablePositions;
};

const getRandomPosition = (grid: number[][]) => {
  const availablePositions = getAvailablePosition(grid);
  const randomIndex = Math.floor(Math.random() * availablePositions.length);
  return availablePositions[randomIndex];
};

export const useGrid = (length: 3 | 4 | 5 | 6) => {
  const [grid, setGrid] = useState<ListNumber[][]>(createGrid(length));

  const resetGrid = () => {
    setGrid(createGrid(length));
  };

  const addRandomNumber = () => {
    const position = getRandomPosition(grid);
    const newGrid = [...grid];
    newGrid[position.x][position.y] = Math.random() < 0.7 ? 2 : 4;
    setGrid(newGrid);
  };

  useEffect(() => {
    addRandomNumber();
    addRandomNumber();
  }, []);

  return { grid, resetGrid, addRandomNumber };
};
