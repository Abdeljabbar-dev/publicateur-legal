import { useState, useEffect, useRef } from "react"
import { useField } from 'formik';

export default function Select(props) {
    const { placeholder, options, width } = props;
    const [isOptionsVisible, setOptionsVisibility] = useState(false);
    const node = useRef();
    const [field, meta, helpers] = useField(props.name);

    useEffect(() => {
        if (isOptionsVisible) document.body.addEventListener('click', handleOnblur);
        else document.body.removeEventListener('click', handleOnblur);
        return () => document.body.removeEventListener('click', handleOnblur);
    }, [isOptionsVisible])


    const handleSelect = function (option) {
        helpers.setValue(option);
        setOptionsVisibility(false);
    }

    const handleOnFocus = function () {
        setOptionsVisibility(true);
    }

    const handleOnblur = function (e) {
        if (!node.current.contains(e.target)) {
            helpers.setTouched(true);
            setOptionsVisibility(false);
        }
    }


    return (
        <span ref={node} className="select">
            <span onClick={handleOnFocus} className="form-input">
                <input value={field.value} style={{ width }} placeholder={placeholder} readOnly />
                <div className="icon" />
                {/* <img width="20" src="/images/arrow-select.svg" /> */}
            </span>
            {
                isOptionsVisible &&
                <div className="options">
                    {
                        options.map(option => <div key={option} className="option" onClick={() => handleSelect(option)}>{option}</div>)
                    }
                </div>
            }

            <style jsx>{`
                .select {
                    position: relative;
                    line-height: 30px;
                }
                .options{
                    position: absolute;
                    background: #ffffff70;
                    border-radius: 10px;
                    overflow: hidden;
                    z-index: 999999;
                    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                    min-width: 200px;
                    top: 30px;
                    left: 0px;
                    backdrop-filter: blur(10px);
                }

                .options > .option {
                    padding: 15px 15px;
                    cursor: pointer;
                    border-bottom: 1px solid #80808012;
                    font-weight: bold
                }

                .options > .option::last-child {
                    border-bottom: none;
                }

                .form-input{
                    padding:0px 5px;
                    margin: 0 10px;
                    border-bottom: ${(meta.touched && meta.error) ? `2px solid #c76464` : field.value ? `2px solid var(--accent-color)` : `2px dashed var(--accent-color)`};
                    position: relative;
                    display: inline-flex;
                    justify-content: center;
                }

                .form-input > input {
                    font-weight: bold;
                    color: var(--accent-color);
                    border: none;
                    background: none;
                    width: 100%;
                    padding: 0;
                }

                .form-input > input::placeholder {
                    color: ${(meta.touched && meta.error) ? '#c76464' : `var(--accent-color)`};
                    opacity: 0.6
                }

                .icon {
                    margin-top:5px;
                    width:20px;
                    height: 20px;
                    background: ${(meta.touched && meta.error) ? '#c76464' : `var(--accent-color)`};
                    -webkit-mask-image: url(/images/arrow-select.svg);
                    mask-image: url(/images/arrow-select.svg);
                    mask-size: cover;
                    display: inline-block;
                }
            `}</style>
        </span>
    )
}