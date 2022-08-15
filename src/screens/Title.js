import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Title({ navigation, route }) {
  const { otherParam } = route.params;
  return (
    <SafeAreaView>
      <View style={{ flex: 1 }}>
        <Image
          source={otherParam}
          style={{ width: 400, height: 600 }}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  textstyle1: {
    padding: 5,
    fontSize: 18,
    color: "#000",
  },
});

export default Title;
