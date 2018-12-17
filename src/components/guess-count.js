import React from 'react';
import {connect} from 'react-redux';

import './guess-count.css';

function GuessCount(props) {
    console.log(props);
    if(props.count){
        return (
            <p>
                Guess #<span id="count">{props.count}</span>!
            </p>
        );
    } else return null;
}

export const mapStateToProps = state => ({
    count: state.count,
});

export default connect (mapStateToProps)(GuessCount); 
