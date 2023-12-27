import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function GoalInput({ onAddGoal }) {
  const [enterGoal, SetEnterGoal] = useState("");
  function goalInputHandler(enteredGoals) {
    SetEnterGoal(enteredGoals);
  }

  const onAddGoalHandler = () => {
    onAddGoal(enterGoal);
    SetEnterGoal("");
  };
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Enter your goals"
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enterGoal}
      />
      <Button title="Add Goal" onPress={onAddGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "column",
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#cccccc",
    padding: 10,
  },
});

export default GoalInput;
