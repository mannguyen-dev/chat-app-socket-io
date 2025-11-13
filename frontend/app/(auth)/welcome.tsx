import Button from "@/components/Button";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

const Welcome = () => {
  const router = useRouter();
  return (
    <ScreenWrapper showPattern={true}>
      <View style={styles.container}>
        <View style={{ alignItems: "center" }}>
          <Typo color={colors.white} size={43} fontWeight={"900"}>
            Bubbly
          </Typo>
        </View>

        <Animated.Image
          entering={FadeIn.duration(700).springify()}
          source={require("../../assets/images/welcome.png")}
          style={styles.welcomeImage}
          resizeMode={"contain"}
        />

        <View>
          <Typo size={33} color={colors.white} fontWeight={"800"}>
            Stay connected
          </Typo>
          <Typo size={33} color={colors.white} fontWeight={"800"}>
            with your friends
          </Typo>
          <Typo size={33} color={colors.white} fontWeight={"800"}>
            and family
          </Typo>
        </View>

        <Button
          style={{ backgroundColor: colors.white }}
          onPress={() => router.push("/(auth)/register")}
        >
          <Typo fontWeight={"bold"} size={23}>
            Get Started
          </Typo>
        </Button>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: spacingX._20,
    paddingVertical: spacingY._10,
  },
  background: {
    flex: 1,
    backgroundColor: colors.neutral900,
  },
  welcomeImage: {
    height: verticalScale(300),
    aspectRatio: 1,
    alignSelf: "center",
  },
});
