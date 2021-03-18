import React from 'react'
export const Show = ({ when = false, children }) => !!when ? children : null
