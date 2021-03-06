import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';

// Create the players array of objects
const players = [
 {
     name: "Guyb",
     score: 50,
	 id: 1
 },
 {
     name: "Guil",
	 score: 65,
	  id: 2
 },
 {
 	 name: "Ben",
	 score: 26,
	 id: 3
	 	
 },
 {
	 name: "John",
	 score: 77,
	 id: 4
 }
];

const Header = (props) =>
{
    return(
    <header>
        <h1>{ props.title }</h1>
        <span className="stats">Players: {props.totalPlayers}</span>
        </header>
    );
}

const Player = (props) =>
{
    return(
        <div className="player">
        <span className="player-name">
            {props.name}
        </span>
                <Counter score={props.score}/>
        </div>
        
        

    );
}

const Counter = (props) =>
{
    return(
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}
        </span>
        <button className="counter-action increment"> + </button>
        </div>
    );
}

const App = (props) =>
{
    return(
     <div className="scoreboard">
        <Header
		title="Scoreboard"
		totalPlayers={props.initialPlayers.length} />
        
        { /* Players list */}
        {props.initialPlayers.map(
			player =>
		    <Player name={player.name}
		    score={player.score}
			key={player.id.toString()}
		/>
	    )}
      
        </div>
    );
}

ReactDOM.render(
<App initialPlayers={players}/>, 
document.getElementById("root"),

);