import * as React from 'react';
const SvgArrowCircleBrokenDownRight = ({ width, height, color, outline, ...props }) => (
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
            d="M9.41 2.34a9.996 9.996 0 0 1 9.661 2.589c3.905 3.905 3.905 10.237 0 14.142-3.905 3.905-10.237 3.905-14.142 0a9.996 9.996 0 0 1-2.59-9.66M15 9v6m0 0H9m6 0L5 5"
        />
    </svg>
);
export default SvgArrowCircleBrokenDownRight;
