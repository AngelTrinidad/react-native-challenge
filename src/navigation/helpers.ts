import {
  RouteProp,
  useNavigation as nativeUseNavigation,
  useRoute as nativeUseRoute,
} from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStack, PublicStack } from "./types";

/**
 * Hook useNavigation with AuthStack type
 */
export const useAuthNavigation = () =>
  nativeUseNavigation<StackNavigationProp<AuthStack>>();

/**
 * Hook useNavigation with PublicStack type
 */
export const usePublicNavigation = () =>
  nativeUseNavigation<StackNavigationProp<PublicStack>>();

/**
 * Use Route hook with auth type
 */
export const useAuthRoute = <Screen extends keyof AuthStack>() =>
  nativeUseRoute<RouteProp<AuthStack, Screen>>();
