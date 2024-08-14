import React from "react";
import { Dropdown } from "primereact/dropdown";

function DropdownList({
    id,
    dataKey,
    value,
    className,
    placeholder,
    options,
    optionValue,
    optionLabel,
    onChange,
    disabled,
    name,
    filter,
    showClear, emptyMessage
}) {
    return (
        <div>
            <Dropdown
                id={id}
                dataKey={dataKey}
                value={value}
                className={`form-select col-lg-12 ${className}`}
                options={options}
                onChange={onChange}
                disabled={disabled}
                name={name}
                emptyMessage={emptyMessage ? emptyMessage :'No results found' }
                optionLabel={optionLabel}
                optionValue={optionValue}
                placeholder={placeholder}
                filter={filter}
                showClear={showClear}
            />
        </div>
    );
}

export default DropdownList;
