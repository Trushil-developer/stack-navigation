import { CompositeNavigationProp } from "@react-navigation/native";
import { AppStackRouteParams } from ".";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";

export type AppStackNavigation = CompositeNavigationProp<NativeStackNavigationProp<AppStackRouteParams>, NativeStackNavigationProp<RootStackParamList>>;