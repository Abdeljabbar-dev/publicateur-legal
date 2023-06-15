import { useState, useEffect } from 'react';
import { useField } from 'formik';


export default function Input({ ...props }) {
    const [field, meta, helpers] = useField(props.name);


    return (
        <>
            <textarea className="form-textarea" {...props} {...field} rows='3' />

            <style jsx>{`
                .form-textarea{
                    position: relative;
                    font-weight: bold;
                    color: var(--accent-color);
                    border: none;
                    border-radius: 4px;
                    line-height: 25px;
                    width: 100%!important;
                    padding: 10px;
                    border:${(meta.touched && meta.error) ? `2px solid #c76464` : field.value ? `2px solid var(--accent-color)` : `2px dashed var(--accent-color)`};
                }

                .form-textarea textarea::placeholder {
                    ${(meta.touched && meta.error) ? '#c76464' : `var(--accent-color)`};
                    opacity: 0.6
                }
            `}</style>
        </>
    )
}