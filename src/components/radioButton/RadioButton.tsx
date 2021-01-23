import React, { FC } from 'react';
import './RadioButton.css';

type Data = {
    label: string;
    value: string;
    checked?: boolean;
}
interface RadioButtonProps {
    wrapperClass?: string;
    className?: string;
    disabled?: boolean;
    hasError?: string;
    onclick: (name: string) => void;
    name: string;
    data: Array<Data>;
}

const RadioButton: FC<RadioButtonProps> = (props) => {
    const { data, name, onclick,  hasError, className, disabled, wrapperClass } = props;

    const click = (value: string): void => {
        if (!disabled) {
            onclick(value);
        }
    };

    const buildContent = () => {
        return data.map(
            (radio) =>
                <>
                    <label onClick={() => click(radio.value)}>
                        <input checked={radio.checked} type='radio' className='input-box-radio' value={radio.value} name={name} readOnly />
                        {radio.label}
                    </label>
                </>
            );
    }

    return (
        <div className={wrapperClass}>
            <div className={className} >
                {buildContent()}
                {hasError && <div className='error-message'>{hasError}</div>}
            </div>
        </div>
    );
};

export default RadioButton;
