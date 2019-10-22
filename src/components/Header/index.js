import React from "react";
import "./style.css";

export default (props) => {
    return (
        <div class="container-fluid scoreboard">
            <div className="row scoring">
                <div className="heartWrapper col-3">
                    <div className="heartsTitle row">Lives Left</div>
                    <div className="hearts row">{props.hearts}</div>
                </div>
                <div className="gameTitle col-6">
                    <h1 className="gameTitleMain">Game of Thrones Memory Game</h1>
                    <h3 className="rules">Click as many Game of Thrones characters without clicking them twice!</h3>
                </div>
                <div className="col-3 scores">
                    <div className="currentScore score row"> Current Score: {props.currentScore} </div>
                    <div className="topScore score row">Top Score: {props.topScore}</div>
                </div>
            </div>
            <div className="row message">
                <h3 className="messageText">{props.message}</h3>
            </div>
        </div >
    );
}
