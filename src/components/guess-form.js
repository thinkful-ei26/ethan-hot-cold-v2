import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    // console.log(props);
    const handleGuessSubmit = e => {
        e.preventDefault();
        const data = new FormData(e.target);
        e.target.userGuess.value = '';
        // let entry = e.target.userGuess;
        // console.log(data);
        // const entry = props.handleGuessEntry(Number(data.get('userGuess')));
        // console.log(entry);
        // if (entry === undefined) {
        //     alert('Has to be a number');
        // } else {
        //     return entry;
        // }
        // // console.log(props.handleGuessEntry(Number(data.get('userGuess'))));
        return props.handleGuessEntry(Number(data.get('userGuess')));
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

