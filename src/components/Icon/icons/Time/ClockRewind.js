import * as React from 'react';
const SvgClockRewind = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m22.7 13.5-2-2-2 2M21 12a9 9 0 1 1-1.245-4.57M12 7v5l3 2"
        />
    </svg>
);
export default SvgClockRewind;
