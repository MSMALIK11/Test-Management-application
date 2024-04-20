import React from 'react'
interface ChangePassProp {
    currentPassword: number | string,
    newPassword: number | string
}
interface Event {
    [x: string]: { name: string; value: string | number }
    event?: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
}

export { ChangePassProp, Event }