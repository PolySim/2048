import { Animated, Text, View } from "react-native";
import { gridStyle } from "../style";
import { colors } from "../../../colors";
import { ListNumber, ScanDirection } from "../../../type";
import { useEffect, useRef } from "react";

type CellProps = {
  value: ListNumber;
  translate: ScanDirection;
  numberTranslate: number;
};

const animation = (
  value: Animated.Value,
  toValue: number,
  numberTranslate: number,
) => {
  Animated.timing(value, {
    toValue: toValue * numberTranslate,
    duration: 200,
    useNativeDriver: true,
  }).start();
  setTimeout(() => {
    Animated.timing(value, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  }, 200);
};

const Cell = (cell: CellProps) => {
  const transformHorizontal = useRef(new Animated.Value(0)).current;
  const transformVertical = useRef(new Animated.Value(0)).current;
  const transformScale = useRef(new Animated.Value(0)).current;

  const transform = (direction: string) => {
    switch (direction) {
      case "top":
        animation(transformVertical, -70, cell.numberTranslate);
        break;
      case "bottom":
        animation(transformVertical, 70, cell.numberTranslate);
        break;
      case "left":
        animation(transformHorizontal, -70, cell.numberTranslate);
        break;
      case "right":
        animation(transformHorizontal, 70, cell.numberTranslate);
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

  useEffect(() => {
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
