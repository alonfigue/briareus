import React from 'react';

export const VisibilityControl = props => {
    return (
        <div className='form-check'>
            <input
                type="checkbox"
                //className="form-check-input"
                checked={props.isChecked}
                onChange={e => props.hello(e.target.checked)}
            />
            <label htmlFor="form-check-label">
                 - {props.description}
            </label>
        </div>
    )
}