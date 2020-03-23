import React from 'react';
import moment from 'moment';

export const Timer = ( { currentTime }) => {  

    return (
        <div id="timer-wrap">
            <div id="timer">{moment(currentTime).format('mm:ss')}</div>
        </div>
    )
}
