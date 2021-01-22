import React, { FC } from 'react';
import './Form.css';

export const Form: FC = ({children}) => {
    return (
        <div className='form'>
            <div className='form-title'>
                <span>Create a new account</span>
            </div>
            {children}
        </div>
    );
};

export const FormItem: FC = ({children}) => {
    return (
        <div className='form-item'>{children}</div>
    );
};
