import React from "react";
import "./button.css";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    btnHeader,
    fullWidth,
    url,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
        ? buttonStyle
        : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    // click methods
    return (
        <button
            className={`btn1 btn-sm ${btnHeader} ${checkButtonStyle} ${fullWidth} ${checkButtonSize}`}
            href={url}
            type={type}
            onClick={onClick}
        >
            {children}
        </button>
    );
};