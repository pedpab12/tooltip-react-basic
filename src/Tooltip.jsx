import React from 'react';

export default function Tooltip({ children, tooltipText, position = "left", duration = 2000, backgroundColor, textColor }) {

    const positions = {
        top: 'top',
        bottom: 'bottom',
        left: 'left',
        right: 'right',
        center: 'center',
        topCenter: 'top center',
        bottomCenter: 'bottom center',
    };

    return (
        <div className='tooltip'>
            {children}
            <span className={`tooltiptext backColor colorText  ${positions[position]}`}
                style={{ backgroundColor, textColor }}
            >{tooltipText}</span>
        </div>
    );
}