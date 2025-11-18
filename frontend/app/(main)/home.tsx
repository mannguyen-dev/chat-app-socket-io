import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { colors } from "@/constants/theme";
import Button from "@/components/Button";
import { useAuth } from "@/contexts/authContext";
import { testSocket } from "@/socket/socketEvents";

const Home = () => {
  const { signOut } = useAuth();

  // useEffect(() => {
  //   testSocket(testSocketCallbackHandler);
  //   testSocket(null);

  //   return () => {
  //     testSocket(null, true);
  //   };
  // }, []);

  // const testSocketCallbackHandler = (data: any) => {
  //   console.log("Got response from testSocket events: ", data);
  // };

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <ScreenWrapper>
      <Typo color={colors.white}>Home</Typo>

      <Button onPress={handleLogout}>
        <Typo>Logout</Typo>
      </Button>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
