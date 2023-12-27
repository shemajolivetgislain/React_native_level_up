import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem/GoalItem";
import GoalInput from "./components/Inputs/GoalInput";
import Holder from "./components/Holder";


export default function App() {
  const [goals, setGoals] = useState([]);

  function listAddedGoals(enterGoal) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enterGoal, id: Math.random().toString() },
    ]);
  }

  function onDeleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      {/* <Image source={require("/assets/images/a.PNG")} /> */}
      <Holder />
      <GoalInput onAddGoal={listAddedGoals} />
      <View style={styles.goalsCon}>
        <Text>List Goals</Text>
        <FlatList
          alwaysBounceVertical={false}
          data={goals}
          renderItem={(itemData) => {
            return (
              <GoalItem
                value={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={onDeleteGoalHandler}
              />
            );
          }}
          keyExtractor={(item, index) => item.id}
        />

        {/* {goals.map((items, index) => (
          <Text key={index} style={styles.goalItem}>
            {items}
          </Text>
        ))} */}
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

  goalsContainer: {
    flex: 5,
  },
});
