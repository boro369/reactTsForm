import React, { FormEvent } from 'react';

interface Option {
    id: number;
    value: string;
}

interface SelectOptionProps {
    options: Array<Option>;
    onSelect: (option?: Option) => void;
    hasError?: string;
}

const SelectOption: React.FC<SelectOptionProps> = ({hasError, options, onSelect}) => {

    const handleSelect = (event: FormEvent<HTMLSelectElement>) => {
        const selected = options.find((option: Option) => option.id); //=== event.target.id);
        onSelect(selected);
    };

    return (
        <>
            <select onChange={handleSelect}>
                {options.map((option: Option) => (
                    <option key={option.id} value={option.value}>{option.value}</option>
                ))}
            </select>
            {hasError && <div className='error-message'>{hasError}</div>}
        </>
    );
}

export default SelectOption;