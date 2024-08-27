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
                className={`col-lg-12 ${className}`}
                options={options}
                onChange={onChange}
                disabled={disabled}
                name={name}
                emptyMessage={emptyMessage ? emptyMessage :'No data found' }
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
