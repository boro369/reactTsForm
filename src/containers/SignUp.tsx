import React, { FC, useState } from 'react';
import { Form, FormItem } from '../components/form/Form';
import InputBox from '../components/inputBox/InputBox';
import CheckBox from '../components/checkBox/CheckBox';
import RadioButton from '../components/radioButton/RadioButton';
import Select from '../components/selectOption/SelectOption';
import Button from '../components/button/Button';
import { emilValidation } from '../utility/UtilityFunctions';
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
                        className="input-box-name"
                        placeholder="Enter your name"
                        name="name"
                        customErrorText="Custom Error Text"
                        isRequired={true}
                        onchange={handleNameChange}
                        validationCallback={setVAlidation}
                    />
                </FormItem>
                <FormItem>
                    <InputBox
                        className="input-box-email"
                        placeholder="Email"
                        name="email"
                        changeValidation={false}
                        customFunction={(event) => emilValidation(event, 'InvalidEmail')}
                        customErrorText="Custom Error Text"
                        isRequired={true}
                        onchange={handleEmailChange}
                        validationCallback={setVAlidation}
                    />
                </FormItem>
                <FormItem>
                    <InputBox
                        className="input-box-pswd"
                        placeholder="Password"
                        name="password"
                        customErrorText="Custom Error Text"
                        isRequired={true}
                        onchange={handlePasswordChange}
                        validationCallback={setVAlidation}
                    />
                </FormItem>
                <FormItem>
                    <Select 
                        options={[
                            {
                                id: 1,
                                value: 'ssssss'
                            },
                            {
                                id: 2,
                                value: 'vdvfd'
                            },
                            {
                                id: 3,
                                value: 'nytnyt'
                            }
                        ]}
                        onSelect={handleSelectCountry}
                    />
                </FormItem>
                <FormItem>
                    <RadioButton
                        wrapperClass="form-item-radio"
                        checked
                        onclick={ (): void => void 0 }
                        label="male"
                        name='male'
                        value="male"
                    />
                </FormItem>
                <FormItem>
                    <RadioButton
                        wrapperClass="form-item-radio"
                        onclick={ (): void => void 0 }
                        label="female"
                        value="female"
                        name='male'
                    />
                </FormItem>
                <FormItem>
                    <CheckBox
                        wrapperClass='form-item-checkbox'
                        value="value"
                        label="Accept terms and conditions"
                        checked={ false }
                        onchange={ (): void => void 0 }
                    />
                </FormItem>
                <FormItem>
                    <Button
                        disabled={buttonDisabled}
                        onclick={(): void => void 0 }
                        title="title"
                    />
                </FormItem>

            </Form>
        </div>
    );
};
