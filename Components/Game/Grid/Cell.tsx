import { Animated, Text, View } from "react-native";
import { gridStyle } from "../style";
import { colors } from "../../../colors";
import { ListNumber, ScanDirection } from "../../../type";
import { useEffect, useRef } from "react";

type CellProps = {
  value: ListNumber;
  translate: ScanDirection;
};

const Cell = (cell: CellProps) => {
  const transformHorizontal = useRef(new Animated.Value(0)).current;
  const transformVertical = useRef(new Animated.Value(0)).current;
  const transformScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const transform = (direction: string) => {
      switch (direction) {
        case "top":
          Animated.timing(transformVertical, {
            toValue: -70,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          break;
        case "bottom":
          Animated.timing(transformVertical, {
            toValue: 70,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          break;
        case "left":
          Animated.timing(transformHorizontal, {
            toValue: -70,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          break;
        case "right":
          Animated.timing(transformHorizontal, {
            toValue: 70,
            duration: 1000,
            useNativeDriver: true,
          }).start();
          break;
        case "pop":
          Animated.timing(transformScale, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
          break;
        default:
          break;
      }
    };

    if (cell.translate) {
      transform(cell.translate);
    }
  }, [cell.translate]);

  return (
    <View style={gridStyle.cell}>
      <View style={gridStyle.cell} />
      {cell.value === 0 ? null : (
        <Animated.View
          style={{
            ...gridStyle.cell,
            backgroundColor: colors[cell.value].bg,
            position: "absolute",
            transform: [
              { translateX: transformHorizontal },
              { translateY: transformVertical },
              { scale: cell.translate === "pop" ? transformScale : 1 },
            ],
          }}
        >
          <Text style={{ ...gridStyle.text, color: colors[cell.value].text }}>
            {cell.value}
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

export default Cell;
