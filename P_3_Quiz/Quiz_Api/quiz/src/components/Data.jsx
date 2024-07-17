import transition from '../transition';
import { useContext, useState } from 'react';
import { createNewPlayer, UserContext } from '../App.jsx';
import { useNavigate } from 'react-router-dom';
import { createUser } from './request/axios.jsx';

function PushPlayerData(player){
	return {
		name: player.name,
		category: player.category,
		level: player.level,
		score: player.score	
	}
}

function Data({ setPlayer }){
	const navigate = useNavigate();
	const player = useContext(UserContext);

	const [inputValue,setInputValue] = useState('');

	const handleClick=(target)=>{
		if(target){
			player.name = inputValue;
			console.log(createUser(PushPlayerData(player)));
			navigate('/Ranking')
		}else{
			setPlayer(createNewPlayer());
			navigate('/Home');
		}
	}

	/*
	{
	  "name":"Kevin",
	  "category":"Video Games",
	  "level":"hard",
	  "score":270
	}
	*/

	const handleChange = (event) => {
        setInputValue(event.target.value);
    };

	return (<>
		<div className="container-Data">
			<h1 id='title'>QUIZFY</h1>
			<h3 id="score">Final Score: {player.score}</h3>
			<p id="info">Insert your name...</p>
			<form id="form">
				<input type="text" value={inputValue} onChange={handleChange} name="name" id="name"/>
			</form>
			<div id="buttons">
				<button id="cancel" onClick={()=>{handleClick(false)}}>Cancel</button>
				<button id="send" onClick={()=>{handleClick(true)}}>Send</button>
			</div>
		</div>
	</>);
}

const NewData = transition(Data);

export default NewData;