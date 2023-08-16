import React from "react";
import './Reset.css';

function ResetButton({ onClick }) {
    return (
        <button className="button-reset" onClick={onClick}>
            Resetar
        </button>
    );
}

export default ResetButton;