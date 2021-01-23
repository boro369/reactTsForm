import React, { MouseEvent } from 'react';

import './Button.css';

interface ButtonProps {
    wrapperClass?: string;
    disabled?: boolean;
    className?: string;
    onclick: () => void;
    title?: string;
    icon?: string;
    text?: string;
}

const disabledHandler = (event: MouseEvent<HTMLElement>) => event.stopPropagation();

const Button: React.FC<ButtonProps> = (props) => {
    const {
        wrapperClass,
        disabled,
        className,
        onclick,
        title,
        icon,
        text,
    } = props;

    return (
        <div className={wrapperClass}>
            <button
                className={className}
                disabled={disabled}
                onClick={disabled ? disabledHandler : onclick}
                title={title}
            >
                {icon && <i className={icon} />}
                {text}
            </button>
        </div>
    );
};

export default Button;