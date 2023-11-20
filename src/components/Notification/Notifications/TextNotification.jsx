import React from 'react';

import { Text } from './../../Text';

export const TextNotification = ({ body, title, children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
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
