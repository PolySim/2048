import { useEffect, useState } from "react";
import { GridType } from "../../type";
import {
  concatHorizontal,
  concatVertical,
  moveHorizontal,
  moveVertical,
} from "./handlerMove";
import { getRandomPosition } from "./addRandomNumber";

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
  const [grid, setGrid] = useState<GridType>(createGrid(length));
  const [gridHistory, setGridHistory] = useState<GridType[]>([grid]);

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

  return { grid, addRandomNumber, handlerMove, gridHistory };
};
