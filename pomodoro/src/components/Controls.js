import React from 'react';

export const Control = ({ activeStatus, handleReset }) => {
    const [active, setActive] = activeStatus
    return (


    
    <div className="controls-wrapper">
        <div id="start-wrapper">
            <div id="start-header-wrapper">
                <span id="start-title">PLAY</span>
            </div>
            <div id="start-icon">
                {
                !active ? <img alt="start" src={require('../img/play.png')}  onClick={() => setActive(!active)}/>
                : <img alt="start" src={require('../img/pause.png')}  onClick={() => setActive(!active)}/>
            }
            </div>
        </div>
        <div id="reset-wrapper">
            <div id="reset-header-wrapper">
                <span id="reset-title">RESET</span>
            </div>
            <div id="reset-icon">
                <img alt="reset" src={require('../img/reset.png')} onClick={handleReset}></img>
            </div>
        </div>
    </div>
    )
}