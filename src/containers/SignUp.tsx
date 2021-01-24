import React, { Component } from 'react';
import { Form, FormItem } from '../components/form/Form';
import InputBox from '../components/inputBox/InputBox';
import CheckBox from '../components/checkBox/CheckBox';
import RadioButton from '../components/radioButton/RadioButton';
import Select from '../components/selectOption/SelectOption';
import Button from '../components/button/Button';
import { emailValidation, nameLatinValiadtion } from '../utility/UtilityFunctions';
import { PASSWORD_MIN_LENGTH, COUNTRIES, GENDER } from '../constants/Constants';
import UserType, { Gender } from './interfaces';
// import { saveUser } from '../utility/HTTPClient';

import './SignUp.css';

interface SignUpState {
    nameError?: boolean,
    emailError?: boolean,
    passwordError?: boolean,
    buttonDisabled?: boolean,
    countryError?: boolean,
    getnderError?: boolean,
    termsConditionsError?: boolean,
}

export class SignUp extends Component<{}, SignUpState> {
    data: UserType;

    constructor(props: any) {
        super(props);
        this.state = {
            nameError: false,
            emailError: false,
            passwordError: false,
            buttonDisabled: false,
            countryError: false,
            getnderError: false,
            termsConditionsError: false
        };

        this.data = {
            name: '',
            email: '', 
            password: '',
            country: '',
            acceptTermsAndConditions: false,
            gender: undefined
        };
    }

    handleNameChange = (name: string) => {
        this.data.name = name;
    }

    handleEmailChange = (email: string) => {
        this.data.email = email;
    }

    handlePasswordChange = (password: string) => {
        this.data.password = password;
    }

    handleSelectCountry = (country: {id: number, value: string} | undefined) => {
        this.data.country = country?.value;
        if (country?.value) {
            this.setState({ countryError: false });
        }
    }

    handleCheckGender = (name: string) => {
        this.data.gender = name as unknown as typeof Gender;
        this.setState({
            getnderError: false,
        });
    }

    handAcceptTermsAndConditions = (checked: boolean) => {
        this.data.acceptTermsAndConditions = !checked;
        this.setState((prevState) => {
            return {
                termsConditionsError: !prevState.termsConditionsError,
            }
        });
    }

    //////////////////////
    handleSignUp = () => {
        if (this.handleFinishValidation()) {
            saveUser(this.data);
        }
    }

    handleFinishValidation = () => {
        if (!this.data.name || !this.data.email || !this.data.password || !this.data.country || !this.data.gender || !this.data.acceptTermsAndConditions) {            
            this.setState({
                nameError: true,
                emailError: true,
                passwordError: true,
                countryError: true,
                getnderError: true,
                buttonDisabled: true,
                termsConditionsError: true,
            });
            return false
        }
        return true;
    }
    
    handleValdation = (inputName?: string, error?: boolean) => {
        if (inputName === 'name') {
            this.setState({ nameError: error });
        }
        if (inputName === 'email') {
            this.setState({ emailError: error });
        }
        if (inputName === 'password') {
            this.setState({ passwordError: error });
        }
    }

    nameValiadtion = (value: string) => {
        if (!value) {
            return 'Name is required';
        }
        return nameLatinValiadtion(value, 'Write latin words');
    }

    emailValiadtion = (value: string) => {
        if (!value) {
            return 'Email is required';
        }
        return emailValidation(value, 'Invalid email addres');
    }

    passwordValiadtion = (value: string) => {
        if (!value) {
            return 'Password is required';
        }
        if (value.length < PASSWORD_MIN_LENGTH) {
            return 'Password must contain at least 6 symbol'
        }
    }

    render() {
        const { nameError, emailError, passwordError, countryError, getnderError, buttonDisabled, termsConditionsError } = this.state;
        
        return (
            <div className={'container'}>
                <Form>
                    <FormItem>
                        <InputBox 
                            type='text'
                            className='input-box-name'
                            placeholder='Enter your name'
                            name='name'
                            error={nameError}
                            isRequired={true}
                            customFunction={this.nameValiadtion}
                            onchange={this.handleNameChange}
                            validationCallback={ this.handleValdation}
                        />
                    </FormItem>
                    <FormItem>
                        <InputBox
                            type='email'
                            className='input-box-email'
                            placeholder='Email'
                            name='email'
                            customFunction={(value) => this.emailValiadtion(value)}
                            error={emailError}
                            isRequired={true}
                            onchange={this.handleEmailChange}
                            validationCallback={this.handleValdation}
                        />
                    </FormItem>
                    <FormItem>
                        <InputBox
                            type='password'
                            className='input-box-pswd'
                            placeholder='Password'
                            name='password'
                            customFunction={this.passwordValiadtion}
                            error={passwordError}
                            isRequired={true}
                            onchange={this.handlePasswordChange}
                            validationCallback={this.handleValdation}
                        />
                    </FormItem>
                    <FormItem>
                        <Select 
                            options={COUNTRIES}
                            onSelect={this.handleSelectCountry}
                            errorMessage='You must select your country'
                            hasError={countryError}
                        />
                    </FormItem>
                    <FormItem>
                        <div className='form-item-radio-flex'>
                            <RadioButton 
                                wrapperClass='form-item-radio'
                                className='form-item-radio-male'
                                onclick={this.handleCheckGender}
                                name='gender'
                                data={GENDER}
                                hasError={getnderError && !!!this.data.gender}
                                errorMessage='You must select the gender'  
                            />
                        </div>
                    </FormItem>
                    <FormItem>
                        <CheckBox
                            wrapperClass='form-item-checkbox'
                            className='checkbox-custom'
                            value='value'
                            label={'<div>Accept <a href=\'https://career.habr.com/vacancies/1000068498?fbclid=IwAR218J2fa5GUpB6PR4CsblhBsJQNAt8nhjqZF23jOewa8_r-tgJNNBtMF6w\'>terms</a>  and <a href=\'https://career.habr.com/vacancies/1000068498?fbclid=IwAR218J2fa5GUpB6PR4CsblhBsJQNAt8nhjqZF23jOewa8_r-tgJNNBtMF6w\'>conditions</a><div>'}
                            checked={false}
                            onchange={this.handAcceptTermsAndConditions}
                            hasError={!this.data.acceptTermsAndConditions && termsConditionsError}
                            errorMessage='You must accept the policies'  
                        />
                    </FormItem>
                    <FormItem>
                        <Button
                            disabled={(nameError || emailError || passwordError || countryError || getnderError || termsConditionsError) && buttonDisabled}
                            onclick={this.handleSignUp}
                            title='title'
                            className='primary-button'
                            text='Sign Up'
                            wrapperClass='form-item-button'
                        />
                    </FormItem>
    
                </Form>
            </div>
        );
    }
}
