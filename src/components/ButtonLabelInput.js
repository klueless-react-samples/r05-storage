import React, { useState, useEffect } from 'react'

import { getSessionItem, setSessionItem } from '../service/storage'

export function ButtonLabelInput(props) {
  const [label, setLabel] = useState('');

  useEffect(() => {
    let value = getSessionItem(`counter_name_${props.buttonName}`);
    console.log(value);

    setLabel(value);
    props.set(value);

  }, []);

  function saveLabel(value) {
    setSessionItem(`counter_name_${props.buttonName}`, value);
    setLabel(value);
    props.set(value);
  }

  function onLabelChange(e) {
    saveLabel(e.target.value);
  }

  return (
    <input value={label} onChange={onLabelChange} placeholder={ `Label for ${props.buttonName} button` } />
  )
}
