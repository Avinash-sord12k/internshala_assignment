import React from 'react'

function layout({ children }) {
    return (
        <div className='flex items-center justify-center min-height-screen'>
            {children}
        </div>
    )
}

export default layout
