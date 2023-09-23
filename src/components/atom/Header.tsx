import React from "react";

export const Header = (props: { title: string, description?: string }) => {
  return (
    <header>
      <hgroup>
        <h1>{props.title}</h1>
        {props.description ? <p>{props.description}</p> : null}
      </hgroup>
    </header>
  );
}