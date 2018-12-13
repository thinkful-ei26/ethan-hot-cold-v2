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
            guesses: [10, 15, 25],
            count: 0
        }
        
        this.handleWhatToggle = this.handleWhatToggle.bind(this);
        this.handleGuessEntry = this.handleGuessEntry.bind(this);

    }

    handleWhatToggle(){
        this.setState({
            rules: !this.state.rules
        })
    }

    handleGuessEntry(guess){
        const newGuessArray = [...this.state.guesses, guess];
        const newCount = this.state.count++;
        this.setState({
            guesses: newGuessArray,
            count: newCount
        });
    }
    
    
    render(){
        // if(this.state.rules){
        //     return <InfoModal />
        // }
        return (
            <div>
                <Header rules={this.state.rules} handleWhatToggle={this.handleWhatToggle} />
                <GuessSection feedback={this.state.feedback} handleGuessEntry={this.handleGuessEntry}/>
                <GuessCount count={this.state.count} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
}

