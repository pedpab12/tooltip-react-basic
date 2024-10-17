import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.css';
export function Tooltip({ children, tooltipText, position = "left", duration = 2000, backgroundColor, textColor }) {

    const tooltipRef = useRef(null);
    const [adjustedPosition, setAdjustedPosition] = useState(position);

    const positions = {
        top: 'top',
        bottom: 'bottom',
        left: 'left',
        right: 'right',
        center: 'center',
        topCenter: 'top center',
        bottomCenter: 'bottom center',
    };
    const adjustTooltipPosition = () => {
        const tooltip = tooltipRef.current;
        const parent = tooltip.parentElement;

        const rect = parent.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        const spaceAbove = rect.top;
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceLeft = rect.left;
        const spaceRight = window.innerWidth - rect.right;

        // Cambiar posición si el tooltip se sale de la pantalla
        if (adjustedPosition === 'top' && spaceAbove < tooltipRect.height) {
            setAdjustedPosition('bottom');
        } else if (adjustedPosition === 'bottom' && spaceBelow < tooltipRect.height) {
            setAdjustedPosition('top');
        } else if (adjustedPosition === 'left' && spaceLeft < tooltipRect.width) {
            setAdjustedPosition('right');
        } else if (adjustedPosition === 'right' && spaceRight < tooltipRect.width) {
            setAdjustedPosition('left');
        } else if (adjustedPosition === 'topCenter' && spaceAbove < tooltipRect.height) {
            setAdjustedPosition('bottomCenter');
        } else if (adjustedPosition === 'bottomCenter' && spaceBelow < tooltipRect.height) {
            setAdjustedPosition('topCenter');
        }
    }
    useEffect(() => {
        // Ajustar la posición al montar el componente
        adjustTooltipPosition();

        // Ajustar la posición al redimensionar la ventana
        window.addEventListener('resize', adjustTooltipPosition);

        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener('resize', adjustTooltipPosition);
        };

    }, [adjustedPosition]);

    return (
        <div className='basic-tooltip'>
            {children}
            <span
                ref={tooltipRef}
                className={`tooltiptext backColor colorText  ${adjustedPosition}`}
                style={{ backgroundColor, color: textColor }}
            >{tooltipText}</span>
        </div>
    );
}