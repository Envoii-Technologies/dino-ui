import * as React from 'react';
const SvgClockSnooze = (props) => (
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
            d="M16.5 17h5l-5 5h5m.45-9c.033-.329.05-.662.05-1 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a10.11 10.11 0 0 0 1-.05M12 6v6l3.738 1.87"
        />
    </svg>
);
export default SvgClockSnooze;
