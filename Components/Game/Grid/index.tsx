import { Text, View } from "react-native";
import { useGrid } from "../../../Utils/useGrid";
import { useScan } from "../../../Utils/useScan";
import { gridStyle } from "../style";
import { colors } from "../../../colors";
import { useEffect } from "react";

const Grid = () => {
  const { grid, addRandomNumber } = useGrid(4);
  const { panResponder, scan, resetScan } = useScan();

  useEffect(() => {
    if (scan) {
      console.log("scan", scan);
      addRandomNumber();
    }
  }, [scan]);

  return (
    <View style={gridStyle.container} {...panResponder.panHandlers}>
      {grid.map((row, i) => (
        <View style={gridStyle.row} key={i}>
          {row.map((col, j) => (
            <View style={gridStyle.cell} key={j}>
              {col === 0 ? null : (
                <Text
                  style={{
                    ...gridStyle.text,
                    backgroundColor: colors[col].bg,
                    color: colors[col].text,
                  }}
                >
                  {col}
                </Text>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;
