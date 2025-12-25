'use client';
import classes from './image-picker.module.css';
import { useRef } from 'react';

export default function ImagePicker({ name, label}) {
    const imageInput = useRef();
    
    function handlePickClick() {
        imageInput.current.click();
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <input
                    className={classes.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/jpg, image/png"
                    ref={imageInput}
                />
            </div>
            <button
                className={classes.button}
                type="button"
                onClick={handlePickClick}
            >
                Pick an Image
            </button>
        </div>
    );
}
