import React, { Component } from 'react';

import './CheckBox.css';

interface CheckBoxProps {
    checked: boolean;
    indeterminate?: boolean
    label: string;
    value: string;
    name?: string;
    wrapperClass: string;
    disabled?: boolean;
    hasError?: string;
    onchange: (checked: boolean) => void;
}

interface CheckBoxState {
    checked: boolean;
}

export default class CheckBox extends Component<CheckBoxProps, CheckBoxState> {
    constructor(props: CheckBoxProps) {
        super(props);
        this.state = {
            checked: props.checked,
        };
    }

    componentDidUpdate(prevProps: CheckBoxProps) {
        const { checked } = this.props;
        if (prevProps.checked !== checked) {
            this.setState({ checked });
        }
    }

    handleChange = () => {
        this.setState((prevState) => {
            return { checked: !prevState.checked }
        }, () => {
            this.props.onchange(!this.state.checked);
        });
    }

    render() {
        const { name, label, hasError, value, disabled, wrapperClass } = this.props;
        const { checked } = this.state;

        return (
            <div onClick={() => !disabled && this.handleChange()} className={`${wrapperClass} disabled ? 'disabled-wrapper' : 'checkbox-wrapper'`}>
                <input
                    type={'checkbox'}
                    value={value}
                    name={name}
                    disabled={disabled}
                    checked={checked}
                    readOnly
                />
                <span className='checkmark'></span>
                {label && <label className='checkbox-label'>{label}</label>}
                {hasError && <div className='error-message'>{hasError}</div>}
            </div>
        );
    }
}
