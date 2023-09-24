import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";

function GoalItem({ text, delGoal }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={delGoal}
        // android_ripple={{ color: "red" }}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
      <View style={styles.goalEdit}>
        <TouchableOpacity>
          <FontAwesome5Icon name="pencil-alt" size={15} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={delGoal}>
          <FontAwesome5Icon name="trash" size={15} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    marginTop: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  goalText: {
    margin: 8,
    padding: 3,
    color: "white",
  },
  goalEdit: {
    flexDirection: "row",
    gap: 20,
    padding: 10,
  },
  pressedItem: {
    opacity:0.5,
  },
});

module.exports = GoalItem;
