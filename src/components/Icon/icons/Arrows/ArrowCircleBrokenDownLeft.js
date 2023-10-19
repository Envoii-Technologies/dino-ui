import * as React from 'react';
const SvgArrowCircleBrokenDownLeft = ({ width, height, color, outline, ...props }) => (
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
            d="M9 9v6m0 0h6m-6 0L19 5m2.66 4.41a9.996 9.996 0 0 1-2.589 9.661c-3.905 3.905-10.237 3.905-14.142 0-3.905-3.905-3.905-10.237 0-14.142a9.996 9.996 0 0 1 9.66-2.59"
        />
    </svg>
);
export default SvgArrowCircleBrokenDownLeft;
