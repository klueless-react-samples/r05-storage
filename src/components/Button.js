import React from 'react'

export function Button(props) {

  function getStyle() {
    return `button large ${props.variant}`;
  }

  return (
    <div>
      <button className={getStyle()} onClick={props.click}>
          {props.title}
      </button>
    </div>
  )
}
