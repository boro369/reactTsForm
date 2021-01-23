import React, { FC, useState } from 'react';
import { Form, FormItem } from '../components/form/Form';
import InputBox from '../components/inputBox/InputBox';
import CheckBox from '../components/checkBox/CheckBox';
import RadioButton from '../components/radioButton/RadioButton';
import Select from '../components/selectOption/SelectOption';
import Button from '../components/button/Button';

import './SignUp.css';

enum Gender {
    male = 'name',
    female = 'female'
}

type SigUpData = {
    name?: string,
    email?: string,
    password?: string,
    country?: number,
    gender?: Gender,
    acceptTermsAndConditions?: boolean 
}

export const SignUp: FC = () => {
    const [buttonDisabled, setVAlidation] = useState(true);
    const data: SigUpData = {
        name: undefined,
        email: undefined,
        password: undefined,
        country: undefined,     
        gender: undefined,
        acceptTermsAndConditions: undefined
    };
    
    const handleNameChange = (value: string) => {
        data.name = value;
    }

    const handleEmailChange = (value: string) => {
        data.email = value;
    }

    const handlePasswordChange = (value: string) => {
        data.password = value;
    }

    const handleSelectCountry = (country: {id: number, value: string} | undefined) => {
        data.country = country?.id
    }

    const handleCheckGender = (name: string) => {
        data.gender = name as Gender | undefined;
    }

    const handAcceptTermsAndConditions = (checked: boolean) => {
        data.acceptTermsAndConditions = !checked;
    }

    const handleSignUp = () => {
        console.log('zzzzzzzzzz', data);
    }

    const handleValdation = () => {
        const keysOfObject = Object.keys(data);
        for(let i = 0; i < keysOfObject.length; i++ ) {
            // if (!data[keysOfObject[i]]) {
            //     setVAlidation(true);
            // }
        }

        setVAlidation(false);
    }

    // mnac error cases, unit tests, code cleaning, server part 

    return (
        <div className={'container'}>
            <Form>
                <FormItem>
                    <InputBox 
                        type='text'
                        className='input-box-name'
                        placeholder='Enter your name'
                        name='name'
                        customErrorText='Custom Error Text'
                        isRequired={true}
                        onchange={handleNameChange}
                        validationCallback={handleValdation}
                    />
                </FormItem>
                <FormItem>
                    <InputBox
                        type='email'
                        className='input-box-email'
                        placeholder='Email'
                        name='email'
                        customErrorText='Custom Error Text'
                        isRequired={true}
                        onchange={handleEmailChange}
                        validationCallback={handleValdation}
                    />
                </FormItem>
                <FormItem>
                    <InputBox
                        type='password'
                        className='input-box-pswd'
                        placeholder='Password'
                        name='password'
                        customErrorText='Custom Error Text'
                        isRequired={true}
                        onchange={handlePasswordChange}
                        validationCallback={handleValdation}
                    />
                </FormItem>
                <FormItem>
                    <Select 
                        options={[{
                            id:1,
                            value: 'Armenia'
                        }]}
                        onSelect={handleSelectCountry}
                    />
                </FormItem>
                <FormItem>
                    <div className='form-item-radio-flex'>
                        <RadioButton 
                            wrapperClass='form-item-radio'
                            className='form-item-radio-male'
                            onclick={handleCheckGender}
                            name='gender'
                            data={[
                                {
                                    label: 'Male',
                                    value: 'male'
                                },
                                {
                                    label: 'Female',
                                    value: 'female'
                                },
                            ]}
                            
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
                        onchange={handAcceptTermsAndConditions}
                    />
                </FormItem>
                <FormItem>
                    <Button
                        disabled={buttonDisabled}
                        className='primary-button'
                        onclick={handleSignUp}
                        title='title'
                        text='Sign Up'
                        wrapperClass='form-item-button'
                    />
                </FormItem>

            </Form>
        </div>
    );
};
