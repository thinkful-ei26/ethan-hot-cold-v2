import React from 'react';
import {connect} from 'react-redux';

import './guess-form.css';
import {enterGuess} from '../actions';

export function GuessForm(props) {
    console.log(props);
    const handleGuessSubmit = e => {
        e.preventDefault();
        const inputValue = Number(e.target.userGuess.value);
        e.target.userGuess.value = '';
        if (isNaN(inputValue)){
            alert('Has to be a number');
        } else {
            props.dispatch(enterGuess(inputValue));
        }
        // const data = new FormData(e.target);
        // const guess = Number(data.get('userGuess'));
        // console.log(props.handleGuessEntry(Number(data.get('userGuess'))));
        
    }
    return (
        <form onSubmit={handleGuessSubmit}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

export default connect()(GuessForm);

