import React from 'react';
import "./Table.scss";
import RowItem from "../../components/RowItem/RowItem.jsx"

export default function Table({ upd }) {
    const { words, setWords } = upd;

    const handleDelete = (id) => {
        setWords(words.filter(word => word.id !== id));
    };

    const handleEdit = (id, word, transcription, translation) => {
        setWords(words.map(item => item.id === id ? { ...item, word, transcription, translation } : item));
    };

    return (
        <div className="container">
            {words.map((item) => (
                <RowItem
                    {...item}
                    key={item.id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    );
}