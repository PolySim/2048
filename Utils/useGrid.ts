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

const moveHorizontal = (grid: ListNumber[][], left: boolean) => {
  const newGrid: ListNumber[][] = [...grid];
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i].filter((cell) => cell !== 0);
    const rowReverse = [...row].reverse();

    for (let j = 0; j < grid[i].length; j++) {
      if (left) {
        newGrid[i][j] = j < row.length ? row[j] : 0;
      } else {
        newGrid[i][j] =
          j < grid[i].length - row.length
            ? 0
            : rowReverse[grid[i].length - j - 1];
      }
    }
  }
  return newGrid;
};

const concatHorizontal = (grid: ListNumber[][], left: boolean) => {
  const newGrid = [...grid];
  let pass = false;
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];

    for (let j = 0; j < row.length; j++) {
      if (pass) {
        pass = false;
      } else {
        if (j < row.length - 1 && row[j] === row[j + 1] && row[j] !== 0) {
          if (left) {
            newGrid[i][j] = (row[j] * 2) as ListNumber;
            newGrid[i][j + 1] = 0;
            pass = true;
          } else {
            newGrid[i][j + 1] = (row[j] * 2) as ListNumber;
            newGrid[i][j] = 0;
            pass = true;
          }
        }
      }
    }
  }
  return newGrid;
};

const moveVertical = (grid: ListNumber[][], top: boolean) => {
  const newGrid: ListNumber[][] = [...grid];
  for (let i = 0; i < grid.length; i++) {
    const column = grid.map((row) => row[i]).filter((cell) => cell !== 0);
    const columnReverse = [...column].reverse();

    for (let j = 0; j < grid[i].length; j++) {
      if (top) {
        newGrid[j][i] = j < column.length ? column[j] : 0;
      } else {
        newGrid[j][i] =
          j < grid[i].length - column.length
            ? 0
            : columnReverse[grid[i].length - j - 1];
      }
    }
  }
  return newGrid;
};

const concatVertical = (grid: ListNumber[][], top: boolean) => {
  const newGrid = [...grid];
  let pass = false;
  for (let i = 0; i < grid.length; i++) {
    const column = grid.map((row) => row[i]);

    for (let j = 0; j < column.length; j++) {
      if (pass) {
        pass = false;
      } else {
        if (
          j < column.length - 1 &&
          column[j] === column[j + 1] &&
          column[j] !== 0
        ) {
          if (top) {
            newGrid[j][i] = (column[j] * 2) as ListNumber;
            newGrid[j + 1][i] = 0;
            pass = true;
          } else {
            newGrid[j + 1][i] = (column[j] * 2) as ListNumber;
            newGrid[j][i] = 0;
            pass = true;
          }
        }
      }
    }
  }
  return newGrid;
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
    setGrid((curr) => {
      const position = getRandomPosition(curr);
      const newGrid = [...curr];
      newGrid[position.x][position.y] = Math.random() < 0.7 ? 2 : 4;
      return newGrid;
    });
  };

  const handlerMove = (direction: "top" | "bottom" | "left" | "right") => {
    switch (direction) {
      case "top":
        setGrid((curr) => moveVertical(curr, true));
        setGrid((curr) => concatVertical(curr, true));
        setGrid((curr) => moveVertical(curr, true));
        break;
      case "bottom":
        setGrid((curr) => moveVertical(curr, false));
        setGrid((curr) => concatVertical(curr, false));
        setGrid((curr) => moveVertical(curr, false));
        break;
      case "left":
        setGrid((curr) => moveHorizontal(curr, true));
        setGrid((curr) => concatHorizontal(curr, true));
        setGrid((curr) => moveHorizontal(curr, true));
        break;
      case "right":
        setGrid((curr) => moveHorizontal(curr, false));
        setGrid((curr) => concatHorizontal(curr, false));
        setGrid((curr) => moveHorizontal(curr, false));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    addRandomNumber();
    addRandomNumber();
  }, []);

  return { grid, addRandomNumber, handlerMove };
};
