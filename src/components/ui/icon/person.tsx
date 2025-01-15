import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const PersonIcon = ({ ...props }: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M18.42 14a2.249 2.249 0 012.25 2.249v.575c0 .894-.32 1.76-.901 2.439C18.199 21.096 15.812 22 12.667 22c-3.146 0-5.532-.905-7.099-2.74a3.75 3.75 0 01-.898-2.434v-.578a2.249 2.249 0 012.249-2.25h11.502zm0 1.5H6.92a.749.749 0 00-.749.749v.578c0 .535.191 1.053.54 1.46 1.252 1.468 3.218 2.214 5.957 2.214 2.738 0 4.705-.746 5.962-2.214a2.25 2.25 0 00.54-1.463v-.575a.749.749 0 00-.748-.75zM12.668 2.005a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
      fill="#9CA3AF"
    />
  </Svg>
);
