import React, { Component } from 'react';
import './Hangman.css';
import { randomWord } from './Words.js';

import step0 from "./images/0.png";
import step1 from "./images/1.png";
import step2 from "./images/2.png";
import step3 from "./images/3.png";
import step4 from "./images/4.png";
import step5 from "./images/5.png";
import step6 from "./images/6.png";

class Hangman extends Component {
    static defaultProps = {
        maxWrong: 6,
        images: [step0, step1, step2, step3, step4, step5, step6]
    }

    constructor(props) {
        super(props);
        this.state = {
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()
        }
    }

    handleGuess = e => {
        let letter = e.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(letter),
            mistake: st.mistake + (st.answer.includes(letter) ? 0 : 1)
        }));
    }

    guessedWord() {
        return this.state.answer.split("").map(letter => (this.state.guessed.has(letter) ? letter : " _ "));
    }

    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
            <button
                class='btn btn-lg btn-primary m-2'
                key={letter}
                value={letter}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(letter)}
            >
            {letter}
            </button>
        ));
    }

    resetButton = () => {
        this.setState({
            mistake: 0,
            guessed: new Set([]),
            answer: randomWord()
        });
    }

    render() {
        const gameOver = this.state.mistake >= this.props.maxWrong;
        const isWinner = this.guessedWord().join("") === this.state.answer;
        let gameStat = this.generateButtons();

        if (isWinner) {
            gameStat = "You Won!"
        }

        if (gameOver) {
            gameStat = "You Lost..."
        }

        return (
            <>
                <div className="wrong-geusses">Wrong Guesses: {this.state.mistake} of {this.props.maxWrong}</div>
                <button className='reset-btn' onClick={this.resetButton}>Reset</button>
                <div className="hangman">
                    <h1>Hangman</h1>
                    <div>
                        <img src={this.props.images[this.state.mistake]} alt=""/>
                    </div>
                    <div>
                        <p className="guess-text">Guess the Animal:</p>
                        <p>{!gameOver ? this.guessedWord() : this.state.answer}</p>
                        <p>{gameStat}</p>
                    </div>
                </div>
            </>
        )
    }
}

export default Hangman;