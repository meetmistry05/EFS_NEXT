import React, { Component } from 'react';
import { MultiSelect } from 'primereact/multiselect';


function MultiSelectList({
    id,
    filter,
    value,
    className,
    placeholder,
    options,
    optionValue,
    optionLabel,
    onChange,
    disabled,
    display,
    selectionLimit,
    selectedItemsLabel,
    onHide,
    maxSelectedLabels,
    itemTemplate,
    onSelectAll,
    onFilter,
    selectAll
}) {
    const handleMultiSelectChange = (event) => {
        event.originalEvent.stopPropagation();
        onChange(event);
    };
    return (
        <div>
            <MultiSelect
                id={id}
                filter={filter}
                value={value}
                className={`form-select col-lg-12 ${className}`}
                options={options}
                onChange={handleMultiSelectChange}
                disabled={disabled}
                display={display}
                optionLabel={optionLabel}
                optionValue={optionValue}
                placeholder={placeholder}
                selectionLimit={selectionLimit}
                selectedItemsLabel={selectedItemsLabel}
                onHide={onHide}
                maxSelectedLabels={maxSelectedLabels}
                itemTemplate={itemTemplate}
                onSelectAll={onSelectAll}
                onFilter={onFilter}
                selectAll={selectAll}
            />
        </div>
    );
}

export default MultiSelectList;
