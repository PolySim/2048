import { PanResponder } from "react-native";
import { useState } from "react";

export const useScan = () => {
  const [gesture, setGesture] = useState({ dx: 0, dy: 0 });
  const [scan, setScan] = useState<"top" | "bottom" | "right" | "left" | null>(
    null,
  );

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      setGesture({ dx: gestureState.dx, dy: gestureState.dy });
    },
    onPanResponderRelease: () => {
      const { dx, dy } = gesture;

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 0) {
          setScan("right");
        } else {
          setScan("left");
        }
      } else {
        if (dy > 0) {
          setScan("bottom");
        } else {
          setScan("top");
        }
      }
    },
  });

  const resetScan = () => {
    setScan(null);
  };

  return { panResponder, scan, resetScan };
};
