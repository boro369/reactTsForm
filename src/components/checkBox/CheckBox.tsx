import React, { Component } from 'react';

import './CheckBox.css';

interface CheckBoxProps {
    checked: boolean;
    indeterminate?: boolean
    label: string;
    value: string;
    name?: string;
    wrapperClass?: string;
    className?: string;
    disabled?: boolean;
    hasError?: boolean;
    onchange: (checked: boolean) => void;
    errorMessage?: string;
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
        const { name, label, hasError, value, disabled, wrapperClass, className, errorMessage } = this.props;
        const { checked } = this.state;

        return (
            <div onClick={() => !disabled && this.handleChange()} className={wrapperClass}>
                <input
                    type={'checkbox'}
                    className={className}
                    value={value}
                    name={name}
                    disabled={disabled}
                    checked={checked}
                    readOnly
                />
                <span className='checkmark'></span>
                {label && <label  className='checkbox-label' dangerouslySetInnerHTML={{ __html: label }}/> }
                {hasError && <div className='checkBox-error-text'>{errorMessage}</div>}
            </div>
        );
    }
}
