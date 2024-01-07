import { useEffect, useState } from "react";
import { GridType } from "../../type";
import {
  concatHorizontal,
  concatVertical,
  moveHorizontal,
  moveVertical,
} from "./handlerMove";
import { getRandomPosition } from "./addRandomNumber";
import { addHorizontal, addVertical } from "./addTranslate";

const createGrid = (length: 3 | 4 | 5 | 6) => {
  const grid: GridType = [];
  for (let i = 0; i < length; i++) {
    grid[i] = [];
    for (let j = 0; j < length; j++) {
      grid[i][j] = { value: 2, translate: null, numberTranslate: 0 };
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
      newGrid[position.x][position.y] = {
        value: Math.random() < 0.7 ? 2 : 4,
        translate: "pop",
        numberTranslate: 0,
      };
      return newGrid;
    });
  };

  const handlerMove = (direction: "top" | "bottom" | "left" | "right") => {
    switch (direction) {
      case "top":
        setGrid((curr) => addVertical(curr, true));
        setTimeout(() => {
          setGrid((curr) =>
            moveVertical(concatVertical(moveVertical(curr, true), true), true),
          );
        }, 200);
        break;
      case "bottom":
        setGrid((curr) => addVertical(curr, false));
        setTimeout(() => {
          setGrid((curr) =>
            moveVertical(
              concatVertical(moveVertical(curr, false), false),
              false,
            ),
          );
        }, 200);
        break;
      case "left":
        setGrid((curr) => addHorizontal(curr, true));
        setTimeout(() => {
          setGrid((curr) =>
            moveHorizontal(
              concatHorizontal(moveHorizontal(curr, true), true),
              true,
            ),
          );
        }, 200);
        break;
      case "right":
        setGrid((curr) => addHorizontal(curr, false));
        setTimeout(() => {
          setGrid((curr) =>
            moveHorizontal(
              concatHorizontal(moveHorizontal(curr, false), false),
              false,
            ),
          );
        }, 200);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    // addRandomNumber();
    // addRandomNumber();
  }, []);

  return { grid, addRandomNumber, handlerMove, gridHistory };
};
