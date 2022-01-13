import React from "react";
import { Image } from "react-native";
import ImageLogo from "../../assets/logo.png";

type Props = {
  width?: number;
  height?: number;
};

const Logo: React.FC<Props> = ({ width = 31, height = 28 }) => (
  <Image style={{ width, height }} source={ImageLogo} />
);

export default React.memo(Logo);
