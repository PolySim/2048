import { GridType, ListNumber } from "../../type";
import { ifOnlyThreeSuccession } from "./utils";

export const moveHorizontal = (grid: GridType, left: boolean) => {
  const newGrid: GridType = [...grid];
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i].filter((cell) => cell.value !== 0);
    const rowReverse = [...row].reverse();

    for (let j = 0; j < grid[i].length; j++) {
      if (left) {
        newGrid[i][j] =
          j < row.length
            ? { ...row[j], translate: null, numberTranslate: 0 }
            : { value: 0, translate: null, numberTranslate: 0 };
      } else {
        newGrid[i][j] =
          j < grid[i].length - row.length
            ? { value: 0, translate: null, numberTranslate: 0 }
            : { ...rowReverse[grid[i].length - j - 1], translate: null };
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
        if (
          j < row.length - 1 &&
          row[j].value === row[j + 1].value &&
          row[j].value !== 0
        ) {
          if (left) {
            newGrid[i][j] = {
              value: (row[j].value * 2) as ListNumber,
              translate: null,
              numberTranslate: 0,
            };
            newGrid[i][j + 1] = {
              value: 0,
              translate: null,
              numberTranslate: 0,
            };
            pass = true;
          } else {
            if (ifOnlyThreeSuccession(j, row)) {
              newGrid[i][j + 2] = {
                value: (row[j].value * 2) as ListNumber,
                translate: null,
                numberTranslate: 0,
              };
              newGrid[i][j + 1] = {
                value: row[j].value,
                translate: null,
                numberTranslate: 0,
              };
              newGrid[i][j] = {
                value: 0,
                translate: null,
                numberTranslate: 0,
              };
              j++;
            } else {
              newGrid[i][j + 1] = {
                value: (row[j].value * 2) as ListNumber,
                translate: null,
                numberTranslate: 0,
              };
              newGrid[i][j] = { value: 0, translate: null, numberTranslate: 0 };
            }
            pass = true;
          }
        }
      }
    }
  }
  return newGrid;
};

export const moveVertical = (grid: GridType, top: boolean) => {
  const newGrid = [...grid];
  for (let i = 0; i < grid.length; i++) {
    const column = grid.map((row) => row[i]).filter((cell) => cell.value !== 0);
    const columnReverse = [...column].reverse();

    for (let j = 0; j < grid[i].length; j++) {
      if (top) {
        newGrid[j][i] =
          j < column.length
            ? { ...column[j], translate: null }
            : { value: 0, translate: null, numberTranslate: 0 };
      } else {
        newGrid[j][i] =
          j < grid[i].length - column.length
            ? { value: 0, translate: null, numberTranslate: 0 }
            : { ...columnReverse[grid[i].length - j - 1], translate: null };
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
          column[j].value === column[j + 1].value &&
          column[j].value !== 0
        ) {
          if (top) {
            newGrid[j][i] = {
              value: (column[j].value * 2) as ListNumber,
              translate: null,
              numberTranslate: 0,
            };
            newGrid[j + 1][i] = {
              value: 0,
              translate: null,
              numberTranslate: 0,
            };
            pass = true;
          } else {
            if (ifOnlyThreeSuccession(j, column)) {
              newGrid[j + 2][i] = {
                value: (column[j].value * 2) as ListNumber,
                translate: null,
                numberTranslate: 0,
              };
              newGrid[j + 1][i] = {
                value: column[j].value,
                translate: null,
                numberTranslate: 0,
              };
              newGrid[j][i] = {
                value: 0,
                translate: null,
                numberTranslate: 0,
              };
              j++;
            } else {
              newGrid[j + 1][i] = {
                value: (column[j].value * 2) as ListNumber,
                translate: null,
                numberTranslate: 0,
              };
              newGrid[j][i] = { value: 0, translate: null, numberTranslate: 0 };
            }
          }
          pass = true;
        }
      }
    }
  }
  return newGrid;
};
