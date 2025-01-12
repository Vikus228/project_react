import React, { useState, useEffect, useRef } from 'react';
import "./GameItem.scss";

export default function GameItem({
                                     id,
                                     word,
                                     transcription,
                                     translation,
                                     topic
                                 }) {
    const [showCompanys, setShowCompanys] = useState(false);
    const [count, setCount] = useState(0);
    const [viewedWords, setViewedWords] = useState([]);
    const btnRef = useRef(null);

    useEffect(() => {
        if (showCompanys && !viewedWords.includes(id)) {
            setViewedWords([...viewedWords, id]);
            setShowCompanys(false);
        }
    }, [id]);

    useEffect(() => {
        if (!showCompanys && btnRef.current) {
            btnRef.current.focus();
        }
    }, [showCompanys]);

    function handleClick() {
        setShowCompanys(true);
        setCount(count + 1);
    }

    return (
        <div className="game-item">
            <div>
                <h1>{word}</h1>
                <p>{transcription}</p>
                <p>Тема: {topic}</p>
            </div>
            <div>
                {showCompanys ? (
                    <p>{translation}</p>
                ) : (
                    <button onClick={handleClick} ref={btnRef}>показать перевод</button>
                )}
            </div>
            <p>Слов изучено: {count}</p>
        </div>
    );
}