import { InputText } from "primereact/inputtext";
import { forwardRef } from "react";

function TextBox({ id, value, type, className, placeholder, onChange, autoComplete, onBlur, maxLength, style, disabled = false }, ref) {
    return (
        <InputText
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            className={`form-control ${className}`}
            onChange={onChange}
            ref={ref}
            autoComplete={autoComplete}
            onBlur={onBlur}
            disabled={disabled}
            maxLength={maxLength}
            style={style}
        />
    );
}

export default forwardRef(TextBox);
