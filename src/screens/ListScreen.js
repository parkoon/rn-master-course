import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];
  return (
    <FlatList
      keyExtractor={(el) => el.name}
      data={friends}
      renderItem={(el) => {
        // el === { item: { name: 'Friend #1' }, index: 0}

        // warning! 왜 키를 지정해야 하는가?
        // 성능 이슈와 관계 있음!
        // 키를 따로 지정하지 않으면, 리액트는 모든 <Text />를 지우고 다시 재배열을 한다.
        // 키를 지정하면 그 키만 지운다.
        return <Text>{el.item.name}</Text>;
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;
