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
                        className='input-box-name'
                        placeholder='Enter your name'
                        name='name'
                        customErrorText='Custom Error Text'
                        isRequired={true}
                        onchange={handleNameChange}
                        validationCallback={setVAlidation}
                    />
                    <div className='error-msg'></div>
                </FormItem>
                <FormItem>
                    <InputBox
                        className='input-box-email'
                        placeholder='Email'
                        name='email'
                        customErrorText='Custom Error Text'
                        isRequired={true}
                        onchange={handleEmailChange}
                        validationCallback={setVAlidation}
                    />
                    <div className='error-msg'></div>
                </FormItem>
                <FormItem>
                    <InputBox
                        className='input-box-pswd'
                        placeholder='Password'
                        name='password'
                        customErrorText='Custom Error Text'
                        isRequired={true}
                        onchange={handlePasswordChange}
                        validationCallback={setVAlidation}
                    />
                    <div className='error-msg'></div>
                </FormItem>
                <FormItem>
                    <Select 
                        options={[{
                            id:1,
                            value: 'Armenia'
                        }]}
                        onSelect={ (): void => void 0 }
                    />
                    <div className='error-msg'></div>
                </FormItem>
                <FormItem>
                        <RadioButton 
                        wrapperClass='form-item-radio'
                        disabled={ false }
                        checked={ false }
                        onclick={ (): void => void 0 }
                        label='male'
                        value='male'
                        name='male'
                    />
                </FormItem>
                <FormItem>
                    <RadioButton 
                        wrapperClass='form-item-radio'
                        disabled={ false }
                        checked={ false }
                        onclick={ (): void => void 0 }
                        label='female'
                        value='female'
                        name='female'
                    />
                </FormItem>
                <FormItem>
                    <CheckBox
                        wrapperClass='form-item-checkbox'
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
                    />
                </FormItem>

            </Form>
        </div>
    );
};
