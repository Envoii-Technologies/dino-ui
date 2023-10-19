import * as React from 'react';
const SvgFramer = (props) => (
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
            d="M12 15.5v7l-7-7m0 0v-7h7m-7 7h14l-7-7m0 0h7v-7H5l7 7Z"
        />
    </svg>
);
export default SvgFramer;
