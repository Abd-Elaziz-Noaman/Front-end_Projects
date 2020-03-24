import React from "react";

export default function Header(props) {
  return (
    <h1 class="all" id={props.id} style={{ color: props.color }}>
      <i>{props.title}</i>
    </h1>
  );
}
