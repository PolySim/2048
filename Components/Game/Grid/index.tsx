import { Button, View } from "react-native";
import { useGrid } from "../../../Utils/useGrid";
import { useScan } from "../../../Utils/useScan";
import { useEffect } from "react";

const Grid = () => {
  const { grid, addRandomNumber } = useGrid(4);
  const { panResponder, scan, resetScan } = useScan();

  useEffect(() => {
    if (scan) {
      console.log(scan);
      resetScan();
    }
  }, [scan]);

  return (
    <View {...panResponder.panHandlers}>
      <Button onPress={addRandomNumber} title="Press"></Button>
    </View>
  );
};

export default Grid;
