import * as React from 'react';
const SvgArrowSquareCornerDownLeft = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        {...props}
    >
        <g stroke="#000" clipPath="url(#arrow-square-corner-down-left_svg__a)">
            <rect width={18} height={18} x={3} y={3} strokeWidth={2} rx={3} />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="m11.1 16-3.2-3.2m0 0 3.2-3.2m-3.2 3.2h7.2V8"
            />
        </g>
        <defs>
            <clipPath id="arrow-square-corner-down-left_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
            </clipPath>
        </defs>
    </svg>
);
export default SvgArrowSquareCornerDownLeft;
