import * as React from 'react';
const SvgMusicNotePlus = (props) => (
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
            d="M14.5 18V5.589c0-.857 0-1.286.18-1.544a1 1 0 0 1 .674-.416c.312-.046.695.145 1.462.529L20.5 6m-6 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8-8V4m-3 3h6"
        />
    </svg>
);
export default SvgMusicNotePlus;
