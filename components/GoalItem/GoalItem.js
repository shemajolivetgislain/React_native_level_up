import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem({ value, onDeleteItem, id }) {
  console.log(id);
  return (
    <Pressable onPress={onDeleteItem.bind(this, id)}>
      <View style={styles.goalItem}>
        <Text>{value}</Text>
      </View>
    </Pressable>
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
