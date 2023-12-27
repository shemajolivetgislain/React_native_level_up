import { StyleSheet, View, Text, Pressable } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function GoalItem({ value, onDeleteItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={onDeleteItem.bind(this, id)}
        style={({pressed}) => pressed && styles.pressedItem}
        android_ripple={{ Colors: "#1e3a8a" }}
      >
        <Text>{value}</Text>
      </Pressable>
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
  pressedItem:{
    opacity:0.5,
  }
});

export default GoalItem;
