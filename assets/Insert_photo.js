import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" width={80.0} height={80.0}>
    <Path data-name="Path 117" d="M0 0h80.162v80.162H0Z" fill="none" />
    <Path
      data-name="Path 118"
      d="M63.461 16.7v46.761H16.7V16.7h46.761m0-6.68H16.7a6.7 6.7 0 0 0-6.68 6.68v46.761a6.7 6.7 0 0 0 6.68 6.68h46.761a6.7 6.7 0 0 0 6.68-6.68V16.7a6.7 6.7 0 0 0-6.68-6.68ZM47.229 39.613 37.208 52.539l-7.148-8.651-10.02 12.893h40.08L47.229 39.613Z"
      fill="#3a3a3a"
    />
  </Svg>
);

export default SvgComponent;
