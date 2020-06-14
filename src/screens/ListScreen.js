import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 11 },
    { name: "Friend #2", age: 12 },
    { name: "Friend #3", age: 13 },
    { name: "Friend #4", age: 14 },
    { name: "Friend #5", age: 15 },
    { name: "Friend #6", age: 16 },
    { name: "Friend #7", age: 17 },
    { name: "Friend #8", age: 18 },
    { name: "Friend #9", age: 19 },
  ];
  return (
    <FlatList
      // 기본이 vertical
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(el) => el.name}
      data={friends}
      renderItem={(el) => {
        // el === { item: { name: 'Friend #1' }, index: 0}

        // warning! 왜 키를 지정해야 하는가?
        // 성능 이슈와 관계 있음!
        // 키를 따로 지정하지 않으면, 리액트는 모든 <Text />를 지우고 다시 재배열을 한다.
        // 키를 지정하면 그 키만 지운다.
        return (
          <View>
            <Text style={styles.textStyle}>
              {el.item.name} - {el.item.age}
            </Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
