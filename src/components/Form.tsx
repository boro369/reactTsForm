import React, { FC } from 'react';
import InputBox from './InputBox';
import CheckBox from './CheckBox';
import RadioButton from './RadioButton';

import './Form.css'

// interface RadioButtonProps {
//     wrapperClass: string;
// }

export const Form: FC = () => {

    return (
        <div className="form">
           <div className="form-title">
                <span>Create a new account</span>
            </div>
            <FormItem />
        </div>
    );
};

export const FormItem: FC = () => {

    return (
        <div>
            <div className="form-item-input">
                <InputBox 
                    className="input-box-name"
                    placeholder="Enter your name"
                    name="name"
                    customErrorText="Custom Error Text"
                    isRequired={true}
                />
                <InputBox
                    className="input-box-email"
                    placeholder="Email"
                    name="email"
                    customErrorText="Custom Error Text"
                    isRequired={true}
                />
                <InputBox
                    className="input-box-pswd"
                    placeholder="Password"
                    name="password"
                    customErrorText="Custom Error Text"
                    isRequired={true}
                />
            </div>

            <RadioButton 
                wrapperClass="form-item-radio"
                disabled={ false }
                checked={ false }
                // onclick={ () => void }
                label="male"
                value="male"
                name="gender"
                id="male"
            />
            <RadioButton 
                wrapperClass="form-item-radio"
                disabled={ false }
                checked={ false }
                // onclick={ () => void }
                label="female"
                value="female"
                name="gender"
                id="female"
            />

            <CheckBox
                wrapperClass='form-item-checkbox'
                value="value"
                label="Accept terms and conditions"
                checked={ false }
                onchange={ (): void => void 0 }
            />
        </div>
    );
};
