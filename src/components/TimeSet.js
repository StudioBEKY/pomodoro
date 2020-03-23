import React from 'react';

export const TimeSet = ({ type, value }) => {
    
    const [val, setVal] = value;
    const handleIncrement = () => {
        if (val >= 60) {
          return null
        } else {
          setVal(val + 1)
        }
      }
    const handleDecrement = () => {
        if (val === 1) {
          return null
        } else {
          setVal(val - 1)
        }
      }

    return (
    <div className="control">
        <div className="type-wrapper">
            <span id={`${type.toLowerCase()}-label`}>{type}</span>
        </div>
        <div className="interval-control-wrapper">
            <span id={`${type.toLowerCase()}-decrement`} onClick={handleIncrement}>
             +
            </span>
            <span id={`${type.toLowerCase()}-length`}>{val}</span>

            <span id={`${type.toLowerCase()}-increment`} onClick={handleDecrement}>
             -
            </span>


        </div>
    </div>
    )
}