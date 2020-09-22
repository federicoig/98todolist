import React from "react";

interface IButton {
    href: string
    label?: string
    className?: string   
}

export const Button: React.FC<IButton> = (props) => {
    return (
        <button onClick={(e) => {
            if (window.location.href !== props.href){
                window.location.href=props.href
            }
        }} aria-label={props.label} className={props.className}>
            {props.children}
        </button>
    )
}