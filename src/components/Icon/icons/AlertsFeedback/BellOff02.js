import * as React from 'react';
const SvgBellOff02 = ({ width, height, color, outline, ...props }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill={outline ? 'transparent' : color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 21h-4M8.633 3.034A6 6 0 0 1 18 8c0 2.1.27 3.751.648 5.032M6.258 6.257A5.998 5.998 0 0 0 6 8c0 3.09-.78 5.206-1.65 6.605-.735 1.18-1.102 1.771-1.089 1.936.015.182.054.252.2.36.133.099.732.099 1.928.099H17m4 4L3 3"
        />
    </svg>
);
export default SvgBellOff02;
