import React, { Component, MouseEvent, ChangeEvent, FormEvent } from 'react';
import './inputBox.css';

interface InputLabel {
    onclick: (event: MouseEvent<HTMLElement>) => void;
    class: string;
    title: string;
    value: string;
}

interface InputProps {
    validationCallback: (error: boolean) => void;
    changeValidation: boolean;
    customErrorText: string;
    customFunction?: (value: string) => string;
    blurValidation: boolean;
    autoComplete: string;
    className: string;
    placeholder: string;
    isRequired: boolean;
    onchange: (event: string) => void;
    onblur: (event: FormEvent<HTMLInputElement>) => void;
    name: string;
    type: string; 
}

interface InputState {
    nestedError: string;
    errorMsg: string;
    error: boolean;
}

export default class InputBox extends Component<InputProps, InputState> {
    static defaultProps = {
        validationCallback: (): void => void 0,
        changeValidation: true,
        blurValidation: true,
        autoComplete: 'off',
        className: '',
        placeholder: '',
        isRequired: false,
        onchange: (): void => void 0,
        onblur: (): void => void 0,
        value: '',
        name: '',
        type: 'text',
    }

    constructor(props: InputProps) {
        super(props);
        this.state = {
            nestedError: '',
            errorMsg: props.customErrorText,
            error: false,
        };
    }

    onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { onchange, changeValidation } = this.props;
        const { value } = event.currentTarget;
        if (changeValidation) {
            this.check(value);
        }

        onchange(event.currentTarget.value);
    }

    onBlur = (event: FormEvent<HTMLInputElement>): void => {
        const { onblur, blurValidation } = this.props;
        const { value } = event.currentTarget;
        if (blurValidation) {
            this.check(value);
        }
        onblur(event);
    }

    setNestedError = (error: string): void => {
        this.setState({ nestedError: error });
        this.props.validationCallback(!!error);
    }

    check = (value: string): void => {
        const { name, isRequired, customFunction } = this.props;

        if (isRequired) {
            if (!value) {
                this.setNestedError(`${name} is required`);
                return;
            }
            this.setNestedError('');
        }

        if (customFunction) {
            const inputValue = value?.trim();
            const newErrorMessage = customFunction(inputValue);
            if (typeof newErrorMessage === 'string') {
                this.handleCheckEnd(true, newErrorMessage);
                return;
            }
            this.handleCheckEnd(false, '');
        }
    }

    handleCheckEnd = (error: boolean, errorMsg: string): void => {
        this.setState({ error, errorMsg });
        this.props.validationCallback(error);
    }

    render() {
        const { className, placeholder, name, type, autoComplete } = this.props;
        const { nestedError, errorMsg, error } = this.state;

        return (
            <div className='input-box-container'>
                <input
                    placeholder={placeholder}
                    autoComplete={'off'}
                    className={`${className} input-box ${ error || nestedError ? 'input-box-error' : 'input-box-margin'}`}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    name={name}
                    type={type}
                />
                {nestedError && <span className='input-box-error-text'>{this.state.nestedError}</span>}
                {error && !nestedError && <span className='input-box-error-text'>{errorMsg}</span>}
            </div>
        );
    }
}