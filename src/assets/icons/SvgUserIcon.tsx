import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgUserIcon = (props: any) => (
  <Svg
    xmlns="
http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <Path
      fill="#8F8F8F"
      d="M15.334 14.078c-1.011-1.748-2.57-3.002-4.388-3.596a4.78 4.78 0 1 0-4.892 0c-1.819.593-3.377 1.847-4.389 3.596a.532.532 0 1 0 .92.531c1.251-2.162 3.462-3.453 5.915-3.453 2.452 0 4.664 1.291 5.915 3.453a.533.533 0 0 0 .89.067.53.53 0 0 0 .03-.598ZM4.781 6.375a3.719 3.719 0 1 1 7.438 0 3.719 3.719 0 0 1-7.438 0Z"
    />
  </Svg>
);
export default SvgUserIcon;
