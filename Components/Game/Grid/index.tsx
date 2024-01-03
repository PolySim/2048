import { View } from "react-native";
import { useGrid } from "../../../Utils/useGrid";

const Grid = () => {
  const { grid } = useGrid(4);

  console.log(grid);

  return <View></View>;
};

export default Grid;
