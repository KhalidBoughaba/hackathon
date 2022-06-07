import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    height={60}
    width={60}>
    <Path d="m7 10 5 5 5-5H7z" fill="black" />
  </Svg>
);

export default SvgComponent;
