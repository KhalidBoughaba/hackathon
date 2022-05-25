import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = () => (
  <Svg viewBox="0 0 414 110.6" width="100%" height="50%">
    <Path
      d="M414 20H0v51.1l16.5 8.5C33 88.3 66 105 99 109.4s66-4.4 99.1-17c33-12.9 66-29.7 99.1-38.3 33-8.5 66-8.5 99.1 2.2 6 1.9 11.9 4.2 17.8 6.6V20z"
      style={{
        fill: '#7992b7',
      }}
    />
    <Path
      d="m414 89.4-13.8-10.7c-13.8-10.5-41.4-32.1-69-42.6-27.6-10.6-55.2-10.6-82.8-2.1-27.6 8.7-55.2 25.4-82.8 38.3C138 85 110.4 93.8 82.8 89.4s-55.2-21.2-69-29.8L0 51.1V0h414v89.4z"
      style={{
        fill: '#6084bc',
      }}
    />
  </Svg>
);

export default SvgComponent;
