"use client";

import { Button } from "primereact/button";

const FormButton = ({
    method = undefined,
    type = 'button',
    label = '',
    className = '',
    icon = null,
    loading = false,
    href = '',
    text = false,
    severity = ''
}) => {
    return (
        <Button
            type={type}
            link={href ? true : false}
            label={loading ? 'Please wait...' : label}
            className={className}
            icon={icon}
            text={text}
            onClick={type === 'button' ? method : undefined}
            severity={severity}
        />
    );
};

export default FormButton;
