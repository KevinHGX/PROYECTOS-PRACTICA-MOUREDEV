import transition from "../transition";
import { useState, useContext, useEffect } from 'react';
import { UserContext } from "../App";
import { useAxiosTrivia } from "./request/axios";
<<<<<<< HEAD
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> develop

function Timer({counter}){
    return (
       <>
            <div id="timer">
              <div className="circle" style={{ '--clr': '#fff' }}>
                  <div className="dots sec_dot"></div>
                  <svg>
                    <circle cx="30" cy="30" r="30"></circle>
                    <circle cx="30" cy="30" r="30" id="sc"></circle>
                  </svg>
                    <div id="sec">{counter}</div>
              </div>
            </div>
       </>
    );
}

const GenerateURL = (user) => {
    return user.category === 0
        ? `api.php?amount=10&type=multiple` // Random
<<<<<<< HEAD
        : `api.php?amount=10&category=${user.category}&difficulty=${user.level}&type=multiple`; // Select
=======
        : `api.php?amount=10&category=${user.id_category}&difficulty=${user.level}&type=multiple`; // Select
>>>>>>> develop
}

function Quiz() {
    const user = useContext(UserContext);
<<<<<<< HEAD
    const [counter, setCounter] = useState(30);
    const [index, setIndex] = useState(0);
    const { data, loading, error, fetchData } = useAxiosTrivia();

    const [question, setQuestion] = useState('');
    const [options, setOptions] = useState([]);

	const [select, setSelect] = useState(0);
=======

    const navigate = useNavigate();
    const [next,setNext] = useState(false);
    const [counter, setCounter] = useState(30);//timer
    const [index, setIndex] = useState(0);//num questions
    const { data, loading, error, fetchData } = useAxiosTrivia();//API

    const [question, setQuestion] = useState('');//Text Question
    const [options, setOptions] = useState([]);//answers
	const [select, setSelect] = useState(0);//answer selected
>>>>>>> develop
    
    useEffect(() => {
        fetchData(GenerateURL(user));
    }, []);

<<<<<<< HEAD
    useEffect(() => {
        if (data && data.length > 0) {
=======
    console.log(data);
    useEffect(() => {
        if (data && data.length > 0 && !(index === data.length)) {
>>>>>>> develop
            setQuestion(data[index].question);
            setOptions([...data[index].incorrect_answers, data[index].correct_answer].sort(() => Math.random() - 0.5));
        }
    }, [data,index]);

    useEffect(() => {
        const counterTimer = setInterval(() => {
            setCounter(prevCounter => {
<<<<<<< HEAD
                if (prevCounter > 0) {
                    return prevCounter - 1;
                } else {
                    let aux = index;
=======
                if (prevCounter > 0 && !next) {
                    return prevCounter - 1;
                } else {
                    if(data[index].correct_answer === options[select]){
                        user.score+=prevCounter;
                    }
                    let aux = index;
                    setNext(false);
>>>>>>> develop
                    setIndex((aux + 1));
                    return 30;
                }
            });
        }, 1000);

        return () => clearInterval(counterTimer);
    }, [counter]);

    const handleClick=(optionIndex)=>{
<<<<<<< HEAD
        setSelect(optionIndex)
        setCounter(0);
=======
        if(index === (data.length-1)){
            user.statusRandom = false;
            user.statusSelect = false;
            user.statusComplete = true;
            navigate('/Data');
        }else{
            setSelect(optionIndex)//background change
            setNext(true);
        }

>>>>>>> develop
    }

    return (
        <>
            {loading && <h1>Loading...</h1>}
            {data && data.length > 0 &&
                <div className="container-Quiz">
                    <Timer counter={counter}/>
                    <p id="num-question">Pregunta {index + 1}</p>
                    <h2 id="question">{question}</h2>
                    <ul className="options">
                        {options.map((option, optionIndex) => (
<<<<<<< HEAD
                            <li key={optionIndex}>{option}</li>
=======
                            <li key={optionIndex} onClick={()=>{handleClick(optionIndex)}}>
                                {option}
                            </li>
>>>>>>> develop
                        ))}
                    </ul>
                </div>
            }
        </>
    );
}

const NewQuiz = transition(Quiz);

export default NewQuiz;
