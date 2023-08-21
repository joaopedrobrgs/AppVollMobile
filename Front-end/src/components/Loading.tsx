import { WIDTH_SCREEN } from "../constants/index";
import React, { ReactElement } from "react";
import { StyleSheet, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

const Loading: React.FC<{ isActive: boolean; children?: ReactElement }> = ({
  isActive,
  children,
}) => {
  if (!isActive) return <></>;
  return (
    <View style={[StyleSheet.absoluteFill, { zIndex: 9999 }]}>
      <View style={style.container}>
        <View style={style.loading}>
          <ActivityIndicator size={"large"} color="#000" />
          {children ? (
            <View style={style.childrenContainer}>{children}</View>
          ) : (
            <></>
          )}
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1000,
    backgroundColor: "rgba(0,0,0,0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    width: WIDTH_SCREEN / 3.5,
    height: WIDTH_SCREEN / 3.5,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    backgroundColor: "#DFDFDF",
    borderRadius: 10,
  },
  childrenContainer: {
    marginTop: 10,
  },
});

export default Loading;
