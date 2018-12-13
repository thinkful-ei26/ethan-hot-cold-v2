import React from 'react';

import './guess-count.css';

export default function GuessCount(props) {
    // console.log(props);
    if(props.count){
        return (
            <p>
                Guess #<span id="count">{props.count}</span>!
            </p>
        );
    } else return null;
}
