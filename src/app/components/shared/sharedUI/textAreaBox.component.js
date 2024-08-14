import React, { forwardRef } from "react";
import { InputTextarea } from 'primereact/inputtextarea';


function TextAreaBox({ id, value, type, className, onChange, disabled, rows , maxLength}, ref) {
    return (
        <InputTextarea
            id={id}
            value={value}
            type={type}
            className={`col-lg-12 form-control ${className}`}
            onChange={onChange}
            ref={ref}
            disabled={disabled}
            rows={rows}
            maxLength={maxLength}
        />
    );
}

export default forwardRef(TextAreaBox);
