import { useState, useEffect } from 'react';
import { useField } from 'formik';

export default function Input({ Icon, onClick, ...props }) {
    const [field, meta, helpers] = useField(props.name);

    return (
        <>
            <span onClick={onClick} className="form-input">
                <input {...props}  {...field} />
                {Icon && <Icon />}
            </span>

            <style jsx>{`
                .form-input{
                    padding:3px 5px;
                    margin: 0 10px;
                    border-bottom: ${(meta.touched && meta.error) ? `2px solid #c76464` : field.value ? `2px solid var(--accent-color)` : `2px dashed var(--accent-color)`};
                    position: relative;
                }

                .form-input > input {
                    font-weight: bold;
                    color: var(--accent-color);
                    border: none;
                    background: none;
                }

                .form-input > input::placeholder {
                    color: ${(meta.touched && meta.error) ? '#c76464' : `var(--accent-color)`};
                    opacity: 0.6
                }
            `}</style>
        </>
    )
}