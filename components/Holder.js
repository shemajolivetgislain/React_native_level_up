import { View, Text, StyleSheet, Image } from "react-native";

function Holder() {
  return (
    <View style={styles.holder}>
      <Text>Holder</Text>
      <Image
        source={require("../assets/images/p4.jpg")}
        style={styles.holderImage}
      />
    </View>
  );
}

export default Holder;

const styles = StyleSheet.create({
  holder: {},
  holderImage: {
    width: "90%",
    height: "50%",
  },
});
