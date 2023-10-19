import * as React from 'react';
const SvgAnchor = (props) => (
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
            d="M12 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0v14m0 0A10 10 0 0 1 2 12h3m7 10a10 10 0 0 0 10-10h-3"
        />
    </svg>
);
export default SvgAnchor;
