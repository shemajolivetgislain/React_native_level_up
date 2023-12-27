import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [enterGoal, SetEnterGoal] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredGoals) {
    SetEnterGoal(enteredGoals);
  }
  console.log();
  function listAddedGoals() {
    setGoals((currentGoals) => [...currentGoals, enterGoal]);
  }
  // useEffect(() => {
  //   listAddedGoals();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter your goals"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={listAddedGoals} />
      </View>
      <View>
        <Text>List Goals</Text>
        {goals.map((items, index) => (
          <Text key={index} style={styles.goalItem}>
            {items}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
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
  goalItem: {
    backgroundColor: "#38bdf8",
    padding: 10,
    borderRadius: 5,
    marginBottom: 5,
  },
});
