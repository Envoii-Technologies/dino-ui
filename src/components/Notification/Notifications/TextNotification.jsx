import React from 'react';

import { Text } from './../../Text';

export const TextNotification = ({ className, body, title, children, ...props }) => {
    return (
        <div 
            className={`TextNotification ${className || ''}`} 
            style={{ display: "flex", flexDirection: "column" }}
            {...props}
        >
            {
                title && (<Text size="sm" type="semiBold">{title}</Text>)
            }
            <Text size="sm" type="regular">{body}</Text>
            {
                children && (
                    <div style={{ marginTop: "0.5rem", display: "flex", flexDirection: "row", gap: "0.75rem" }}>
                        {children}
                    </div>
                )
            }

        </div>
    )
}
