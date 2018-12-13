import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    console.log(props);
    const handleGuessSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        e.target.userGuess.value = '';
        return props.handleGuessEntry(data.get('userGuess'));
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

