import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const LocationIcon = ({ fill = 'none', ...props }: SvgProps) => (
  <Svg width={25} height={24} viewBox="0 0 25 24" fill="none" {...props}>
    <Path
      d="M22.23 4.042c.466-1.213-.726-2.405-1.939-1.938L3.295 8.64c-1.359.523-1.251 2.48.157 2.851l7.01 1.845a.75.75 0 01.535.534l1.845 7.011c.37 1.408 2.328 1.516 2.85.157L22.23 4.042z"
      fill="#111827"
    />
  </Svg>
);
