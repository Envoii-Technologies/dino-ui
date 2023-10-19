import * as React from 'react';
const SvgCurrencyEuro = (props) => (
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
            d="M19 5.519a8.5 8.5 0 1 0 0 12.962M3 14h10M3 10h10"
        />
    </svg>
);
export default SvgCurrencyEuro;
