import * as React from 'react';
const SvgArrowCircleBrokenDown = ({ width, height, color, outline, ...props }) => (
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
            d="M17 3.338A9.996 9.996 0 0 1 22 12c0 5.523-4.477 10-10 10S2 17.523 2 12a9.996 9.996 0 0 1 5-8.662M8 12l4 4m0 0 4-4m-4 4V2"
        />
    </svg>
);
export default SvgArrowCircleBrokenDown;
