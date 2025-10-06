import React from 'react'

export default function Container({ children,className = '' }) {
    return (
        <div className={`${className} max-w-[1280px] mx-auto px-4`}>
            {children}
        </div>
    );
}
