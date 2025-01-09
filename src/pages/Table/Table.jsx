import React from 'react';
import "./Table.scss";
import RowItem from "../../components/RowItem/RowItem.jsx"

export default function Table({ upd }) {
    const { words, setWords } = upd;

    const handleDelete = (id) => {
        setWords(words.filter(word => word.id !== id));
    };

    const handleEdit = (id, word, transcription, translation) => {
        setUsers(users.map(word => word.id === id ? { ...user, word, transcription, translation } : word));
    };

    return (
        <div className="container">
            {words.map((word) => (
                <RowItem
                    {...word}
                    key={word.id}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                />
            ))}
        </div>
    );
}