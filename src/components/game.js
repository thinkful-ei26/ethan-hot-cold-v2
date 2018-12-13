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
        
        this.handleWhatToggle = this.handleWhatToggle.bind(this);
        this.handleGuessEntry = this.handleGuessEntry.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }

    // componentWillMount() {
    //     this.initialState = this.state
    // }
    
    handleWhatToggle(){
        this.setState({
            rules: !this.state.rules
        })
    }

    handleGuessEntry(guess){
        const newGuessArray = [...this.state.guesses, guess];
        const newCount = this.state.count + 1;
        console.log(this.state.truth);
        let newFeedback;
        if (Math.abs(this.state.truth - guess) < 5){
            console.log(this.state.truth - guess);
            newFeedback = 'SCORCHING';
        } else if (Math.abs(this.state.truth - guess) < 10){
            newFeedback = 'bien caliente';
            console.log(this.state.truth - guess);
        } else if (Math.abs(this.state.truth - guess) < 15){
            newFeedback = 'hottish';
            console.log(this.state.truth - guess);
        } else if (Math.abs(this.state.truth - guess) < 25){
            newFeedback = 'kinda warm i guess?';
            console.log(this.state.truth - guess);
        } else if (Math.abs(this.state.truth - guess) < 35){
            newFeedback = 'cold';
            console.log(this.state.truth - guess);
        } else {
            newFeedback = 'Just embarassing';
            console.log(this.state.truth - guess);
        }
    
        this.setState({
            guesses: newGuessArray,
            count: newCount,
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
        // if(this.state.rules){
        //     return <InfoModal />
        // }
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

