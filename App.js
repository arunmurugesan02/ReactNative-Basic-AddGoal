import { useState } from "react";

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
} from "react-native";
import GoalItem from "./GoalItem";
import GoalInput from "./GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  // const [editedGoal, setEditedGoal] = useState("");
  function addGoalHandler(goaltext, setGoalText) {

    setGoals((currentGoals) => [...currentGoals, goaltext]);
    setGoalText("");
  }

  // function editGoalHandler(goalId) {
  //   const currGoal = goals.find((goal) => goal.id === goalId);
  //   if (currGoal) {
  //     setEditedGoal(currGoal.text);
  //   }
  // }

  function deleteGoalHandler(index) {
    setGoals(goals.filter((ele,i) => i !== index))
  }
  console.log(goals);

  return (
    <View style={styles.appContainer}>
      <GoalInput
        onAddGoal={addGoalHandler}
        // editGoal={editGoalHandler}
        // editedGoal={editedGoal}
      />
      <View style={styles.goalContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItem
              text={itemData.item}
              // edGoal={() => editGoalHandler(item.id)}
              delGoal={() => deleteGoalHandler(itemData.index)}
            />
          )}
        />
      </View>
    </View>
  );

  // const [background,setBackground] = useState(null);
  // const HandlePress = ()=>{
  //   console.log(Math.floor(Math.random()*16777215).toString(16));
  //   setBackground(Math.floor(Math.random()*16777215).toString(16))
  // }

  // return (
  //   <View style={[style.container,{backgroundColor:`#${background}`}]}>
  //     <Text>Hello Arun from Karur</Text>
  //     <Button  title='Click to change Background' onPress={HandlePress}/>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 50,
    flex: 1,
  },
  goalContainer: {
    flex: 4,
  },
});

// const style = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
// });
