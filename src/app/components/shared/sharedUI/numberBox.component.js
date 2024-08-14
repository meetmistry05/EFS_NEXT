import React, { forwardRef } from "react";
import { InputNumber } from 'primereact/inputnumber';


function NumberBox({ id, value, className, onValueChange, showButtons, min, onChange, disabled}, ref) {
    return (
        <InputNumber
            id={id}
            value={value}
            showButtons={showButtons}
            className={`form-control ${className}`}
            onChange={onChange}
            ref={ref}
            onValueChange={onValueChange}
            min={min}
            useGrouping={false}
            disabled={disabled}
        />
    );
}

export default forwardRef(NumberBox);
