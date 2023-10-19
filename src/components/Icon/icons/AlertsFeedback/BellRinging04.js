import * as React from 'react';
const SvgBellRinging04 = ({ width, height, color, outline, ...props }) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill={outline ? 'transparent' : color}
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.646 18.015a3 3 0 1 1-5.796 1.553m-7.793-7.955a4.007 4.007 0 0 1 1.052-3.926m9.037-1.946a2.5 2.5 0 1 0-3.47.93m11.643.049a4.007 4.007 0 0 0-2.874-2.874m.046 5.6c-.357-1.333-1.31-2.447-2.65-3.098-1.339-.65-2.955-.784-4.492-.373-1.537.412-2.87 1.336-3.704 2.57-.834 1.233-1.102 2.674-.745 4.006.59 2.204.475 3.963.102 5.299-.425 1.522-.637 2.284-.58 2.437.066.175.113.223.288.29.152.06.792-.112 2.071-.455l11.865-3.18c1.28-.342 1.92-.514 2.022-.64.117-.146.134-.212.104-.396-.027-.161-.592-.714-1.721-1.82-.991-.971-1.97-2.437-2.56-4.64Z"
        />
    </svg>
);
export default SvgBellRinging04;
