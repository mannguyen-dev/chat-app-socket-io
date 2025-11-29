import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HeaderProps } from "@/types";
import Typo from "./Typo";

const Header = ({ title = "", leftIcon, rightIcon, style }: HeaderProps) => {
  return (
    <View style={[styles.container, style]}>
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}

      {title && (
        <Typo size={22} style={styles.title} fontWeight={"600"}>
          {title}
        </Typo>
      )}

      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftIcon: {
    alignSelf: "flex-start",
    zIndex: 20,
  },
  rightIcon: {
    alignSelf: "flex-end",
    zIndex: 30,
  },
  title: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    zIndex: 10,
  },
});
