import { GridType } from "../../type";

export const addHorizontal = (grid: GridType, left: boolean) => {
  const newGrid: GridType = [...grid];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (left) {
        if (grid[i].some((cell, index) => cell.value === 0 && index < j)) {
          const numberTranslate = grid[i].filter(
            (cell, index) => cell.value === 0 && index < j,
          ).length;
          grid[i][j] = {
            ...grid[i][j],
            translate: "left",
            numberTranslate: numberTranslate,
          };
        }
      } else {
        if (grid[i].some((cell, index) => cell.value === 0 && index > j)) {
          const numberTranslate = grid[i].filter(
            (cell, index) => cell.value === 0 && index > j,
          ).length;
          grid[i][j] = {
            ...grid[i][j],
            translate: "right",
            numberTranslate: numberTranslate,
          };
        }
      }
    }
  }
  return newGrid;
};

export const addVertical = (grid: GridType, top: boolean) => {
  const newGrid: GridType = [...grid];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (top) {
        if (grid.some((row, index) => row[j].value === 0 && index < i)) {
          const numberTranslate = grid.filter(
            (row, index) => row[j].value === 0 && index < i,
          ).length;
          grid[i][j] = {
            ...grid[i][j],
            translate: "top",
            numberTranslate: numberTranslate,
          };
        }
      } else {
        if (grid.some((row, index) => row[j].value === 0 && index > i)) {
          const numberTranslate = grid.filter(
            (row, index) => row[j].value === 0 && index > i,
          ).length;
          grid[i][j] = {
            ...grid[i][j],
            translate: "bottom",
            numberTranslate: numberTranslate,
          };
        }
      }
    }
  }
  return newGrid;
};
