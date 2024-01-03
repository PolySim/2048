import { Text, View } from "react-native";
import { useGrid } from "../../../Utils/useGrid/useGrid";
import { useScan } from "../../../Utils/useScan";
import { gridStyle } from "../style";
import { colors } from "../../../colors";
import { useEffect } from "react";

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
            <View style={gridStyle.cell} key={j}>
              <View style={gridStyle.cell} />
              {col.value === 0 ? null : (
                <View
                  style={{
                    ...gridStyle.cell,
                    backgroundColor: colors[col.value].bg,
                    position: "absolute",
                  }}
                >
                  <Text
                    style={{ ...gridStyle.text, color: colors[col.value].text }}
                  >
                    {col.value}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default Grid;
