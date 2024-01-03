import { GridType } from "../../type";

const getAvailablePosition = (grid: GridType) => {
  const availablePositions: { x: number; y: number }[] = [];

  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];
      if (cell.value === 0) {
        availablePositions.push({ x: i, y: j });
      }
    }
  }
  return availablePositions;
};

export const getRandomPosition = (grid: GridType) => {
  const availablePositions = getAvailablePosition(grid);
  const randomIndex = Math.floor(Math.random() * availablePositions.length);
  return availablePositions[randomIndex];
};
