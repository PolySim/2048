import { Text, View } from "react-native";
import React from "react";
import { gameStyle } from "./style";
import Grid from "./Grid";

const Game = () => {
  return (
    <View style={gameStyle.container}>
      <Grid />
    </View>
  );
};

export default Game;
