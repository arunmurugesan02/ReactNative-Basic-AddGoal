import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";

function GoalInput({ onAddGoal, editGoal, editedGoal }) {
  const [goaltext, setGoalText] = useState("");
  function addGoalHandler() {
    onAddGoal(goaltext, setGoalText);
  }
  console.log(goaltext);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={goaltext}
        onChangeText={setGoalText}
        style={styles.textInput}
        placeholder="Type your goal"
      />
      <Button onPress={addGoalHandler} title="Add Goal" />
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 24,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 5,
    padding: 8,
    flex: 1,
  },
});
module.exports = GoalInput;
