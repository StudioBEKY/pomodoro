import React, { useState, useEffect, useRef } from 'react';
import '../App.css';

import { Timer } from './Timer';
import { TimeSet } from './TimeSet';
import { Control } from './Controls';


import { useInterval } from '../hooks/UseInterval';

import alarm from '../sounds/alarm.mp3'


const App = () => {
  const [breakVal, setBreakVal] = useState(5);
  const [sessionVal, setSessionVal] = useState(25);
  const [mode, setMode] = useState('session');
  const [time, setTime] = useState(sessionVal * 60 * 1000);
  const [active, setActive] = useState(false);
  const beep = useRef();

  useInterval(() => setTime(time - 1000), active ? 1000 : null)

  useEffect(() => {
    setTime(sessionVal * 60 * 1000)
  }, [sessionVal])

  useEffect(() => {
    if (time === 0 && mode === 'session') {
      beep.current.play();
      setMode('break')
      setTime(breakVal * 60 * 1000)
    } else if (time === 0 && mode === 'break') {
      beep.current.play();
      setMode('session')
      setTime(sessionVal * 60 * 1000)
    }
  }, [time, breakVal, sessionVal, mode])

  const handleReset = () => {
    beep.current.pause()
    beep.current.currentTime = 0
    setActive(false)
    setMode('session')
    setBreakVal(5)
    setSessionVal(25)
    setTime(25 * 60 * 1000)
  }



  return (
    <div className="App">
      <Timer currentTime={time} />
      <div id="interaction-wrapper">
         <Control 
          activeStatus={[active, setActive]} 
          handleReset={handleReset}
        />
        <div className="timeset-wrapper">
          <TimeSet type={'BREAK'} value={[breakVal, setBreakVal]} />
          <TimeSet type={'SESSION'} value={[sessionVal, setSessionVal]} />
        </div>
      </div>
      <audio id="beep" src={alarm} ref={beep} />
    </div>
  );
}

export default App;
