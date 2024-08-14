import React from "react";
import { Checkbox } from 'primereact/checkbox';


function FormCheckbox({ id, checked, onChange, inputId, name, disabled}) {
    return (

        <Checkbox
            id={id}
            checked={checked}
            onChange={onChange}
            inputId={inputId}
            name={name}
            disabled={disabled}
        />
        
    );
}
export default FormCheckbox;