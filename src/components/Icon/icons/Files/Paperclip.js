import * as React from 'react';
const SvgPaperclip = (props) => (
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
            d="m21.152 10.9-9.015 9.015a5.25 5.25 0 0 1-7.425-7.425l9.016-9.015a3.5 3.5 0 1 1 4.95 4.95l-8.662 8.662a1.75 1.75 0 1 1-2.475-2.475l7.601-7.602"
        />
    </svg>
);
export default SvgPaperclip;
