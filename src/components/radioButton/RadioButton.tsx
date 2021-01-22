import React, { FC } from 'react';

import './RadioButton.css';

interface RadioButtonProps {
    wrapperClass: string;
    disabled: boolean;
    checked: boolean;
    onclick: () => void;
    label: string;
    value: string | number;
    name: string;
    id: string;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
    const { id, name, label, value, onclick, checked, disabled, wrapperClass } = props;

    const click = (): void => {
        if (!disabled) {
            onclick();
        }
    };

    return (
        <div className={wrapperClass}>
            <div data-test-id={id} className={disabled ? 'radio disabled' : 'radio'} onClick={click} >
                <input type='radio' value={value} name={name} checked={checked} readOnly />
                {label && <label><span>{label}</span></label>}
                <span className='checkmark'></span>
            </div>
        </div>
    );
};

export default RadioButton;