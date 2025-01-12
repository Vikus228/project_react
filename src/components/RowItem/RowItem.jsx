import React, { useState, useEffect } from 'react';

export default function RowItem( {word, transcription, translation, id, handleDelete, handleEdit } ) {

    const [edit, setEdit] = useState(false);
    const [valueWord, setValueWord] = useState(word);
    const [valueTranscription, setValueTranscription] = useState(transcription);
    const [valueTranslation, setValueTranslation] = useState(translation);
    const [valid, setValid] = useState(false);

    useEffect(() => {
        if (valueTranslation !== '' && valueTranscription !== '' && valueWord !== '') {
            setValid(true);
        } else {
            setValid(false);
        }
    }, [valueTranslation, valueTranscription, valueWord]);

    useEffect(() => {
        setValueWord(word);
        setValueTranscription(transcription);
        setValueTranslation(translation)
    }, [word, transcription, translation]);

    return (
        <div className="container_row">
            <div className="wrapper_content">
                {edit ? (
                    <div className="editer">
                        <input
                            type="text"
                            value={valueWord}
                            onChange={(e) => setValueWord(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            value={valueTranscription}
                            onChange={(e) => setValueTranscription(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            value={valueTranslation}
                            onChange={(e) => setValueTranslation(e.target.value)}
                            required
                        />
                    </div>
                ) : (
                    <div className="content">
                        <div>{word}</div>
                        <div>{transcription}</div>
                        <div>{translation}</div>
                    </div>
                )}
                <div className="wapper_button">
                    {!edit ? (
                        <div>
                            <button onClick={() => {
                                setEdit(!edit);
                                handleEdit(id, word, transcription, translation);
                            }}>edit</button>
                            <button onClick={() => handleDelete(id)}>delete</button>
                        </div>
                    ) : (
                        <div>
                            <button disabled={!valid} onClick={() =>
                                {
                                    handleEdit(id, valueWord, valueTranscription, valueTranslation);
                                    setEdit(false);
                                    console.log(valueWord, valueTranscription, valueTranslation);
                                }
                            }>
                                save
                            </button>
                            <button onClick={() =>
                                {
                                    setValueWord(word);
                                    setValueTranscription(transcription);
                                    setValueTranslation(translation);
                                    setEdit(false);
                                }
                            }>
                                cancel
                            </button>
                            {" "}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}