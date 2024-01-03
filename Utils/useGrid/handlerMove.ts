import { GridType, ListNumber } from "../../type";

export const moveHorizontal = (grid: GridType, left: boolean) => {
  const newGrid: GridType = [...grid];
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

export const concatHorizontal = (grid: GridType, left: boolean) => {
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

export const moveVertical = (grid: GridType, top: boolean) => {
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

export const concatVertical = (grid: GridType, top: boolean) => {
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
