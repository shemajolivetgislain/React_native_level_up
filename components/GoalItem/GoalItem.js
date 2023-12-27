import { StyleSheet, View, Text } from "react-native";

function GoalItem({ value }) {
  return (
    <View style={styles.goalItem}>
      <Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#38bdf8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default GoalItem;
