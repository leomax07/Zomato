import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgCancelIcon = () => (
  <Svg width={14} height={14} fill="none">
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 1 1 13M1 1l12 12"
    />
  </Svg>
);
export default SvgCancelIcon;
