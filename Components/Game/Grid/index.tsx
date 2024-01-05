import { View } from "react-native";
import { useGrid } from "../../../Utils/useGrid/useGrid";
import { useScan } from "../../../Utils/useScan";
import { gridStyle } from "../style";
import { useEffect } from "react";
import Cell from "./Cell";

const Grid = () => {
  const { grid, addRandomNumber, handlerMove } = useGrid(4);
  const { panResponder, scan, resetScan } = useScan();

  useEffect(() => {
    if (scan) {
      handlerMove(scan);
      addRandomNumber();
      resetScan();
    }
  }, [scan]);

  return (
    <View style={gridStyle.container} {...panResponder.panHandlers}>
      {grid.map((row, i) => (
        <View style={gridStyle.row} key={i}>
          {row.map((col, j) => (
            <Cell {...col} key={j} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;
