import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
const SvgWifiIcon = () => (
  <Svg
    width={15}
    height={12}
    fill="none"
  >
    <G clipPath="url(#WifiIcon_svg__a)">
      <Path
        fill="#23FFCA"
        d="M1.27 4.755A8.968 8.968 0 0 1 7.5 2.25c2.419 0 4.612.954 6.23 2.505a.75.75 0 0 0 1.038-1.08A10.453 10.453 0 0 0 7.5.75 10.47 10.47 0 0 0 .23 3.673a.753.753 0 0 0-.022 1.061c.286.3.762.31 1.06.021h.002ZM7.5 6c1.331 0 2.545.495 3.473 1.313a.752.752 0 0 0 1.06-.066.752.752 0 0 0-.066-1.06A6.735 6.735 0 0 0 7.5 4.5c-1.711 0-3.277.638-4.465 1.688a.75.75 0 1 0 .994 1.125A5.223 5.223 0 0 1 7.502 6H7.5ZM9 9.75a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="WifiIcon_svg__a">
        <Path fill="#fff" d="M0 0h15v12H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SvgWifiIcon;