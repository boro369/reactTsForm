import React, { FormEvent } from 'react';

import './SelectOption.css';

interface Option {
    id: number;
    value: string;
    hidden?: boolean;
}

interface SelectOptionProps {
    options: Array<Option>;
    onSelect: (option?: Option) => void;
    hasError?: boolean;
    errorMessage?: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({hasError, options, onSelect, errorMessage}) => {

    const handleSelect = (event: FormEvent<HTMLSelectElement>) => {
        const selected = options.find((option: Option) => option.id); //=== event.target.id);
        onSelect(selected);
    };

    return (
        <>
            <select onChange={handleSelect} className='form-item-select'>
                {options.map((option: Option) => (
                    <option key={option.id} hidden={option.hidden} value={option.value}>{option.value}</option>
                ))}
            </select>
            {hasError && <div className='select-error-text'>{errorMessage}</div>}
        </>
    );
}

export default SelectOption;