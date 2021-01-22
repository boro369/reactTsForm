import React, { FC, useState } from 'react';
import { Form, FormItem } from '../components/form/Form';
import InputBox from '../components/inputBox/InputBox';
import CheckBox from '../components/checkBox/CheckBox';
import RadioButton from '../components/radioButton/RadioButton';
import Select from '../components/selectOption/SelectOption';
import Button from '../components/button/Button';

import './SignUp.css';

type SigUpData = {
    name?: string,
    email?: string,
    password?: string,
    country?: number,
}

export const SignUp: FC = () => {
    const [buttonDisabled, setVAlidation] = useState(true);
    const data: SigUpData = {
        name: undefined,
        email: undefined,
        password: undefined,
        country: undefined,       
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
                        validationCallback={setVAlidation}
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
                        validationCallback={setVAlidation}
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
                        validationCallback={setVAlidation}
                    />
                </FormItem>
                <FormItem>
                    <Select 
                        options={[{
                            id:1,
                            value: 'Armenia'
                        }]}
                        onSelect={ (): void => void 0 }
                    />
                </FormItem>
                <FormItem>
                    <div className='form-item-radio-flex'>
                        <RadioButton 
                            wrapperClass='form-item-radio'
                            className='form-item-radio-male'
                            disabled={ false }
                            checked={ false }
                            onclick={ (): void => void 0 }
                            label='Male'
                            value='male'
                            name='gender'
                        />
                        <RadioButton 
                            wrapperClass='form-item-radio'
                            className='form-item-radio-female'
                            disabled={ false }
                            checked={ false }
                            onclick={ (): void => void 0 }
                            label='Female'
                            value='female'
                            name='gender'
                        />
                    </div>
                </FormItem>
                <FormItem>
                    <CheckBox
                        wrapperClass='form-item-checkbox'
                        className='checkbox-custom'
                        value='value'
                        label='Accept terms and conditions'
                        checked={ false }
                        onchange={ (): void => void 0 }
                    />
                </FormItem>
                <FormItem>
                    <Button
                        disabled={false}
                        onclick={(): void => void 0 }
                        title='title'
                        text='Sign Up'
                        wrapperClass='form-item-button'
                    />
                </FormItem>

            </Form>
        </div>
    );
};
