import React, { ReactNode } from 'react'

interface TemplateProps {
    children?: ReactNode
}

const Template: React.FC<TemplateProps> = ({ children }) => {
    return (
        <div className='App'>
            {children} {/* children prop을 포함 */}
            Template
        </div>
    );
}

export default Template;