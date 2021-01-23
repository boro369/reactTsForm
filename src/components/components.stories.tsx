import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./button/Button";
import CheckBox from './checkBox/CheckBox';
import InputBox from './inputBox/InputBox';
import RadioButton from './radioButton/RadioButton';
import Select from './selectOption/SelectOption';

storiesOf("Button", module)
    .add("Active",
        () => <Button onclick={() => void 0} text='Sign Up' />
    )
    .add("Disabled",
        () => <Button onclick={() => void 0} text='Sign Up' className='btn-disabled' />
    );

storiesOf("CheckBox", module)
    .add("Check Box",
        () => <CheckBox checked={false} label='Please check' value='check' onchange={() => void 0} />
    )

storiesOf("InputBox", module)
    .add("Name",
        () => <InputBox 
                type='text'
                className='input-box-name'
                placeholder='Enter your name'
                name='name'
                customErrorText='Custom Error Text'
                isRequired={true}
                onchange={() => void 0}
            />
    )
    .add("Email",
        () => <InputBox 
                type='email'
                className='input-box-email'
                placeholder='Email'
                name='email'
                customErrorText='Custom Error Text'
                isRequired={true}
                onchange={() => void 0}
            />
    )
    .add("Password",
        () => <InputBox 
                type='password'
                className='input-box-pswd'
                placeholder='Password'
                name='password'
                customErrorText='Custom Error Text'
                isRequired={true}
                onchange={() => void 0}
            />
    )

storiesOf("RadioButton", module)
    .add("Radio Button",
        () => <RadioButton 
                wrapperClass='form-item-radio'
                className='form-item-radio-male'
                onclick={ () => void 0 }
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
    )

storiesOf("Select", module)
    .add("Select Option",
        () => <Select options={ [{id:1, value: 'Armenia'}] } onSelect={ () => void 0 }/>
    )