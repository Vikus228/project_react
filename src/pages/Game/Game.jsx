import React, {useState} from 'react';
import "./Game.scss"
import GameItem from "../../components/GameItem/GameItem.jsx";

export default function Game({upd}) {
    const {words} = upd;
    const [active, setActive] = useState(0);

    function updIndex() {
        if (active === words.length - 1) {
            setActive(0);
            return;
        }
        setActive((prevActive) => prevActive + 1);
    }

    function updIndexPrev() {
        if (active === 0) {
            setActive(words.length - 1);
            return;
        }
        setActive((prevActive) => prevActive - 1);
    }

    return (
        <div className="container_game">
            <div className="btn_prev">
                <button className="btn" onClick={updIndexPrev}>prev</button>
            </div>
            <div className="card">
                <GameItem {...words[active]} />
                <p>{active + 1}/{words.length}</p>
            </div>
            <div className="btn_next">
                <button className="btn" onClick={updIndex}>next</button>
            </div>
        </div>
    )
}