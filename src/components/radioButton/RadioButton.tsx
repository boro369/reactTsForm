import React, { FC, useState, useEffect } from 'react';
import './RadioButton.css';

interface RadioButtonProps {
    wrapperClass: string;
    className: string;
    disabled: boolean;
    checked: boolean;
    onclick: (checked: boolean) => void;
    label: string;
    value: string;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
    const { label, value, onclick, checked, className, disabled, wrapperClass } = props;
    const [state, setState] = useState(false);

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
            <div className={`${className} ${disabled ? 'radio disabled' : 'radio'}`} onClick={click} >
                <input type='radio' value={value} checked={checked} readOnly />
                {label && <label>{label}</label>}
                <span className='checkmark'></span>
            </div>
        </div>
    );
};

export default RadioButton;
