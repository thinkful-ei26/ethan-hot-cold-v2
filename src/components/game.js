import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
// import InfoModal from './info-modal';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rules: false,
            feedback: "Make your guess!",
            guesses: [],
            count: 0,
            truth: Math.ceil(Math.random() * 100)    
        }
        // this.initialState = this.state;
        this.handleWhatToggle = this.handleWhatToggle.bind(this);
        this.handleGuessEntry = this.handleGuessEntry.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }
    
    handleWhatToggle(){
        this.setState({
            rules: !this.state.rules
        })
    }

    handleGuessEntry(guess){
        const newGuessArray = [...this.state.guesses, guess];
        // const newCount = this.state.count + 1;
        let newFeedback;
        if (this.state.truth === guess){
            newFeedback = 'winner winner chicken dinner';
        } else if (Math.abs(this.state.truth - guess) < 5){
            newFeedback = 'SCORCHING';
        } else if (Math.abs(this.state.truth - guess) < 10){
            newFeedback = 'bien caliente';
        } else if (Math.abs(this.state.truth - guess) < 15){
            newFeedback = 'hottish';
        } else if (Math.abs(this.state.truth - guess) < 25){
            newFeedback = 'kinda warm i guess?';
        } else if (Math.abs(this.state.truth - guess) < 35){
            newFeedback = 'cold';
        } else {
            newFeedback = 'Just embarassing';
        }
    
        this.setState({
            guesses: newGuessArray,
            count: newGuessArray.length,
            feedback: newFeedback
        });
    }
    
    handleNewGame(){
        this.setState({
            rules: false,
            feedback: "Make your guess!",
            guesses: [],
            count: 0,
            truth: Math.ceil(Math.random() * 100)    
        });
    }
    
    render(){
        return (
            <div>
                <Header rules={this.state.rules} handleWhatToggle={this.handleWhatToggle} handleNewGame={this.handleNewGame} />
                <GuessSection feedback={this.state.feedback} handleGuessEntry={this.handleGuessEntry}/>
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

