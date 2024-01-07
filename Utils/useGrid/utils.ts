import { GridType } from "../../type";

type InLineType = (index: number, line: GridType[0]) => boolean;

const ifThreeSuccession: InLineType = (index, line) =>
  index < line.length - 2 && line[index + 1].value === line[index + 2].value;

const ifFourSuccession: InLineType = (index, line) =>
  index < line.length - 3 && line[index + 2].value === line[index + 3].value;

export const ifOnlyThreeSuccession: InLineType = (index, line) => {
  return ifThreeSuccession(index, line) && !ifFourSuccession(index, line);
};
