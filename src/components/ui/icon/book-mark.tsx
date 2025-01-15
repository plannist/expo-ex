import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const BookMarkIcon = ({ ...props }: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="#111827" {...props}>
    <Path
      d="M6.19 21.854a.75.75 0 01-1.187-.609V6.25A3.25 3.25 0 018.253 3h7.498a3.25 3.25 0 013.25 3.25v14.996a.75.75 0 01-1.188.609l-5.811-4.18-5.811 4.18zM17.502 6.249a1.75 1.75 0 00-1.75-1.75H8.253a1.75 1.75 0 00-1.75 1.75v13.533l5.06-3.642a.75.75 0 01.877 0l5.061 3.642V6.249z"
      fill="#9CA3AF"
    />
  </Svg>
);
