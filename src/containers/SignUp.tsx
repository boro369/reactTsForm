import React, { FC } from 'react';
import { Form, FormItem } from '../components/form/Form';
import InputBox from '../components/inputBox/InputBox';
import CheckBox from '../components/checkBox/CheckBox';
import RadioButton from '../components/radioButton/RadioButton';
import Select from '../components/selectOption/SelectOption';
import Button from '../components/button/Button';

import './SignUp.css';

export const SignUp: FC = () => {

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
                    />
                </FormItem>
                <FormItem>
                    <InputBox
                        className="input-box-email"
                        placeholder="Email"
                        name="email"
                        customErrorText="Custom Error Text"
                        isRequired={true}
                    />
                </FormItem>
                <FormItem>
                    <InputBox
                        className="input-box-pswd"
                        placeholder="Password"
                        name="password"
                        customErrorText="Custom Error Text"
                        isRequired={true}
                    />
                </FormItem>
                <FormItem>
                    <Select 
                        options={[]}
                        onSelect={ (): void => void 0 }
                    />
                </FormItem>
                <FormItem>
                        <RadioButton 
                        wrapperClass="form-item-radio"
                        disabled={ false }
                        checked={ false }
                        onclick={ (): void => void 0 }
                        label="male"
                        value="male"
                    />
                </FormItem>
                <FormItem>
                    <RadioButton 
                        wrapperClass="form-item-radio"
                        disabled={ false }
                        checked={ false }
                        onclick={ (): void => void 0 }
                        label="female"
                        value="female"
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
                         disabled={false}
                         onclick={(): void => void 0 }
                         title="title"
                    />
                </FormItem>

            </Form>
        </div>
    );
};
