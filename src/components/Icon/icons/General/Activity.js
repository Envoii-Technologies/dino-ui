import * as React from 'react';
const SvgActivity = (props) => (
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
            d="M22 12h-4l-3 9L9 3l-3 9H2"
        />
    </svg>
);
export default SvgActivity;
