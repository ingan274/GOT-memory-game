import React, { Component } from "react";
import Card from '../CharacterIcons';
import Header from '../Header';
import Characters from '../../characters.json';
import './style.css';

let topScore = 0;
let currentScore = 0;
let hearts = 3;
let message = "Click on any Character to start";

class Gameboard extends Component {

    state = {
        Characters,
        topScore,
        currentScore,
        message,
        hearts
    };

    componentDidMount = () => {
        // shuffle characters
        Characters.sort((a, b) => {
            return 0.5 - Math.random();
        });

        this.setState({ Characters });
    }

    renderHearts() {
        let divs = [];

        for (let i = 0; i < this.state.hearts; i++) {
            divs.push(<div key={i} className="heart"></div>);
        }

        return <div>{divs}</div>;
    };

    setClicked = id => {
        const Characters = this.state.Characters;
        const cardClicked = Characters.filter(Character => Character.id === id);

        if (cardClicked[0].clicked) {
            // reset game
            currentScore = 0;

            // setting message dependent on lives left
            if (hearts <= 1) {
                message = "Game Over! Click a character to play again";
                topScore = 0;
                hearts = 3;
                this.setState({ topScore });

                // reset all characters to "not clicked"
                for (let i = 0; i < Characters.length; i++) {
                    Characters[i].clicked = false;
                }

            } else {
                hearts--
                message = "Oops, the Night King has taken one of your lives.";

                // reset all characters to "not clicked"
                for (let i = 0; i < Characters.length; i++) {
                    Characters[i].clicked = false;
                }
            }

            this.setState({ hearts });
            this.renderHearts();
            this.setState({ message });
            this.setState({ currentScore });
            this.setState({ Characters });

        } else {
            // changed to "clicked"
            cardClicked[0].clicked = true;


            // if they get all of it!
            if (currentScore === 60) {
                message = "Huzzah! You have defeated the Night King!";
                topScore = 0;
                hearts = 3;
                this.setState({ topScore });

                // reset all characters to "not clicked"
                for (let i = 0; i < Characters.length; i++) {
                    Characters[i].clicked = false;
                }
            } 
            // During the game (score under 60)
            else {
                // Adding score to current score
                currentScore = currentScore + 4;
                message = "Nice Job, you are on your way to defeating the Night King!"

                if (currentScore > topScore) {
                    topScore = currentScore;
                    this.setState({ topScore });
                }
            }

            // shuffle characters
            Characters.sort((a, b) => {
                return 0.5 - Math.random();
            });

            this.setState({ Characters });
            this.setState({ currentScore });
            this.setState({ message });
        }
    };

    render() {

        return (
            <div clasName="container-fluid">
                <Header hearts={this.renderHearts()} currentScore={this.state.currentScore} topScore={this.state.topScore} message={this.state.message} />
                <div className="row gameBoard">
                    {this.state.Characters.map(Character => (
                        <Card
                            setClicked={this.setClicked}
                            id={Character.id}
                            key={Character.id}
                            image={Character.image}
                            name={Character.name}
                            className="col-sm-1"
                        />
                    ))}
                </div>
            </div>
        );
    }
};

export default Gameboard;