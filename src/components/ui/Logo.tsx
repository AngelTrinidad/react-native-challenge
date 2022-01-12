import React from "react";
import { Image } from "react-native";
import ImageLogo from "../../assets/logo.png";

const Logo: React.FC<any> = () => (
  <Image style={{ width: 60, height: 50 }} source={ImageLogo} />
);

export default React.memo(Logo);
