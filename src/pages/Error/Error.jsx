import React from 'react';
import error from "../../assets/error-page-svgrepo-com.svg"
import "./Error.scss"

export default function Error() {
    return (
        <div className="error-container">
            <h1>Что-то пошло не так(</h1>
            <img src={error} alt="Error" />
        </div>
    )
}