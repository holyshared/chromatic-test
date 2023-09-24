import React from "react";
import "./style.css"

interface HeaderProps {
  title: string
  description?: string  
}

const classNameOf = (props: HeaderProps) => props.description ? "title titleWithDescription" : "title titleOnly";

export const Header = (props: HeaderProps) => {
  return (
    <header className={classNameOf(props)}>
      <hgroup>
        <h1>{props.title}</h1>
        {props.description ? <p>{props.description}</p> : null}
      </hgroup>
    </header>
  );
}