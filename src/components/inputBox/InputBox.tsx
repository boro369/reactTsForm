import React, { Component, ChangeEvent, FormEvent } from 'react';
import './inputBox.css';

interface InputProps {
    validationCallback: (name: string, error: boolean) => void;
    changeValidation: boolean;
    customErrorText?: string;
    customFunction?: (value: string) => string | undefined;
    blurValidation: boolean;
    autoComplete: string;
    className: string;
    placeholder: string;
    isRequired: boolean;
    onchange: (event: string) => void;
    nestedError?: string;
    onblur: (event: FormEvent<HTMLInputElement>) => void;
    name: string;
    type: string; 
    error?: boolean
}

interface InputState {
    nestedError?: string;
    errorMsg?: string;
    error?: boolean;
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
        error: false
    }

    value = '';

    constructor(props: InputProps) {
        super(props);
        this.state = {
            nestedError: '',
            errorMsg: props.customErrorText,
            error: props.error,
        };
    }

    componentDidUpdate() {
        if (this.state.error !== this.props.error) {
            console.log('ssssss', this.value);
            this.check(this.value);
        }
    }

    onChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { onchange } = this.props;
        const { value } = event.currentTarget;
        this.check(value);
        this.value = value;
        onchange(value);
    }

    onBlur = (event: FormEvent<HTMLInputElement>): void => {
        const { onblur } = this.props;
        const { value } = event.currentTarget;
        this.check(value);
        onblur(event);
    }

    check = (value: string): void => {
        const { customFunction } = this.props;

        if (customFunction) {
            const inputValue = value?.trim();
            const newErrorMessage = customFunction(inputValue);
            if (newErrorMessage && typeof newErrorMessage === 'string') {
                this.handleCheckEnd(true, newErrorMessage);
                return;
            }
            this.handleCheckEnd(false, '');
        }
    }

    handleCheckEnd = (error: boolean, errorMsg: string): void => {
        this.setState({ error, nestedError: undefined, errorMsg });
        this.props.validationCallback(this.props.name, error);
    }

    render() {
        const { className, placeholder, name, type } = this.props;
        const { errorMsg, error } = this.state;

        return (
            <div className='input-box-container'>
                <input
                    autoComplete={'off'}
                    placeholder={placeholder}
                    className={`${className} input-box ${ error ? 'input-box-error' : 'input-box-margin'}`}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    name={name}
                    type={type}
                />
                {error && <span className='input-box-error-text'>{errorMsg}</span>}
            </div>
        );
    }
}
