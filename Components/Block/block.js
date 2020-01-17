import React from 'react';

export default function Block(props) {
  return (
    <button className="block" onClick={props.onClick}>
      {props.value}
    </button>
  );
}