import * as React from 'react';
const SvgVoicemail = (props) => (
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
            d="M6 16h12M6 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm12 0a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
        />
    </svg>
);
export default SvgVoicemail;
