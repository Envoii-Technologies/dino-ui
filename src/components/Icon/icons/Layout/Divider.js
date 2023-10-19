import * as React from 'react';
const SvgDivider = (props) => (
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
            d="M3 12h.01m4.49 0h.01m8.99 0h.01M12 12h.01M21 12h.01M21 21v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 17 18.92 17 17.8 17H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 18.52 3 19.08 3 20.2v.8M21 3v.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 7 18.92 7 17.8 7H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 5.48 3 4.92 3 3.8V3"
        />
    </svg>
);
export default SvgDivider;
