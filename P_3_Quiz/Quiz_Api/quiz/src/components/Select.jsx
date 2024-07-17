import transition from "../transition";
import { useState, useContext, useEffect } from "react";
import { UserContext } from "../App";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SvgComponent from "./svg/SvgComponent";

import { useAxiosListCategory } from "./request/axios";

const style = [{ backgroundColor: `var(--color-select-pink)` }, { color: `var(--color-bg-blue)` }];

function SectionCategory({ setCategory }) {
    const [current, setCurrent] = useState('');
    const {data, error, loading, fetchData} = useAxiosListCategory();
    
    useEffect(() => {
        fetchData();
    }, []); // El array vacío asegura que esto se ejecute solo una vez

    //console.log("D>>: ",data);

    const Category = ({ target, index }) => {

        const handleClickCategory = () => {
            setCategory(index);
            setCurrent((current !== index) ? index : '');
        }

        return (
            <div className="category" style={(current === index) ? style[0] : {}} onClick={handleClickCategory}>
                <h1 id="title-c" style={(current === index) ? style[1] : {}}>{target}</h1>
            </div>
        );
    }

    return (
        <div id="section-category">
            <h1 id="title">Select the Category</h1>
            {error && <h1>{error.message}</h1>}
            {loading && <h1>Loading...</h1>}
            {Array.isArray(data) && (
                <div className="list-category">
                    {data.map(( target ) => (
                        <Category key={target.id} target={target.name} index={target.id} />
                    ))}
                </div>
            )}
        </div>
    );
}

/* ----------------------------------------------------------------------- */

function SectionLevel({ setLevel }) {
    const [current, setCurrent] = useState('');
    const levels = ["easy", "medium", "hard"];

    const Level = ({ target }) => {

        const handleClickLevel = () => {
            setLevel(target);
            setCurrent((current !== target) ? target : '');
        }

        return (
            <div className="level" style={(current === target) ? style[0] : {}} onClick={handleClickLevel}>
                <h1 id="title-l" style={(current === target) ? style[1] : {}}>{target}</h1>
            </div>
        );
    }

    return (
        <div id="section-level">
            <h1 id="title">Levels</h1>
            <div className="list-levels">
                {levels.map((target, index) => (
                    <Level key={index} target={target} />
                ))}
            </div>
        </div>
    );
}

/*------------------------------------------------------*/
const animateText = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2, ease: "easeOut", delay: 0.2 }
};

const Select = () => {
    const user = useContext(UserContext);
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');

    const handleClickInitGame = () => {
        user.statusSelect = true;
        user.category = category;
        user.level = level;
    }

    return (
        <>
            <SvgComponent />
            <motion.div className="container-select" variants={animateText} initial="initial" animate="animate" transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}>
                <SectionCategory setCategory={setCategory} />
                <SectionLevel setLevel={setLevel} />
                <button id="btn-iniciar" onClick={handleClickInitGame}>
                    <Link className="nav-link" to="/Quiz">Iniciar</Link>
                </button>
            </motion.div>
        </>
    );
}

const NewSelect = transition(Select);

export default NewSelect;
