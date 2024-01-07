import { StyleSheet } from "react-native";

export const gameStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: 20,
    backgroundColor: "#faf8ef",
  },
});

export const gridStyle = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bbada0",
    padding: 5,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  cell: {
    position: "relative",
    width: 60,
    height: 60,
    margin: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(238, 228, 218, 0.35)",
  },

  text: {
    position: "absolute",
    fontSize: 40,
    fontWeight: "bold",
  },
});
