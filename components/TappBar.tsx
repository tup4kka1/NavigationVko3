import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Appbar } from "react-native-paper";
import { getHeaderTitle } from '@react-navigation/elements';
import { StackHeaderProps } from "@react-navigation/stack";





export default function TappBar({route, options, back, navigation} : StackHeaderProps) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={"Navigationbar"} />
      {route.name === "Home" ? (<Appbar.Action icon="arrow-right" onPress={() => navigation.navigate("Second")}/>) : null}
    </Appbar.Header>
  );
}





