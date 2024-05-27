import { CompositeNavigationProp } from "@react-navigation/native";
import { AuthStackRouteParams } from ".";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";

export type AuthStackNavigation = CompositeNavigationProp<NativeStackNavigationProp<AuthStackRouteParams>, NativeStackNavigationProp<RootStackParamList>>;