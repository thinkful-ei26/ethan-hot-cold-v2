import React from 'react';
import {connect} from 'react-redux';

import './guess-form.css';
import {enterGuess} from '../actions';

export function GuessForm(props) {
    console.log(props);
    const handleGuessSubmit = e => {
        e.preventDefault();
        // const data = new FormData(e.target);
        const inputValue = e.target.userGuess.value;
        console.log(inputValue);
        e.target.userGuess.value = '';
        // const guess = Number(data.get('userGuess'));
        const numberInputValue = Number(inputValue);
        if (isNaN(numberInputValue)){
            alert('Has to be a number');
        } else {
            props.dispatch(enterGuess(numberInputValue));
        }
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

// export const mapStateToProps = state => ({
//     feedback: state.feedback,
//     guesses: state.guesses,
// });

export default connect()(GuessForm);

