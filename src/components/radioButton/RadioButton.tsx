import React, { FC, useState, useEffect } from 'react';
import './RadioButton.css';

interface RadioButtonProps {
    wrapperClass?: string;
    className?: string;
    disabled?: boolean;
    hasError?: string;
    checked?: boolean;
    onclick: (checked: boolean | undefined) => void;
    label?: string;
    name: string;
    value?: string;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
    const { name, label, value, onclick, checked, hasError, className, disabled, wrapperClass } = props;
    const [state, setState] = useState(checked);

    useEffect(() => {
        onclick(state);
    }, [onclick, state]);
    

    const click = (): void => {
        if (!disabled) {
            setState(!state);
        }
    };

    return (
        <div className={wrapperClass}>
            <div className={className} onClick={click} >
                <input type='radio' className='input-box-radio' value={value} name={name} checked={state} readOnly />
                {label && <label>{label}</label>}
                {hasError && <div className='error-message'>{hasError}</div>}
            </div>
        </div>
    );
};

export default RadioButton;
