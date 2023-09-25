import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";

function GoalInput({ onAddGoal, visible, onClose }) {
  const [goaltext, setGoalText] = useState("");
  function addGoalHandler() {
    onAddGoal(goaltext, setGoalText);
    onClose();
  }
  console.log(goaltext);
  return (
    <Modal visible={visible} animationType="fade">
      <View style={styles.inputContainer}>
        <TextInput
          value={goaltext}
          onChangeText={setGoalText}
          style={styles.textInput}
          placeholder="Type your goal"
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button onPress={addGoalHandler} title="Add Goal" />
          </View>
          <View>
            <Button  color="red" title="Cancel" onPress={onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    paddingBottom: 24,
    backgroundColor:'#CA7E6E'
  },
  textInput: {
    borderWidth: 3,
    borderRadius:10,
    borderColor: "black",
    width: "70%",
    marginRight: 5,
    padding: 8,
    color:'white'

  },
  btnContainer: {
    flexDirection: "row-reverse",
    width:'100%',
    marginTop: 10,
  },
  button:{
    marginRight:90,
     paddingLeft:40,
     justifyContent:'space-between'
  }
});
module.exports = GoalInput;
