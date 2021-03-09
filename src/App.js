import React, { useState, useEffect } from 'react'
import { getItem, setItem } from './service/storage'

import logo from './logo.svg';
import './App.css';

import { Button, ButtonLabelInput } from './components';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [labelReset, setLabelReset] = useState('Reset');
  const [labelUp, setLabelUp] = useState('Up');
  const [labelDown, setLabelDown] = useState('Down');
  const [labelMax, setLabelMax] = useState('Max');

  useEffect(() => {
    console.log('count changed changed updated');

    let savedValue = parseInt(localStorage.getItem('count'));

    setCount(savedValue)
    setName(getItem('counter_name', ''));
  }, []);

  function setAndStoreCount(value) {
    setCount(value)
    localStorage.setItem('count', value);
  }

  function onResetButtonClick() {
    setAndStoreCount(0);
  }

  function onUpButtonClick() {
    setAndStoreCount(count + 1);
  }

  function onDownButtonClick() {
    setAndStoreCount(count - 1);
  }

  function onMaxButtonClick() {
    setAndStoreCount(99);
  }

  function onNameChange(e) {
    setName(e.target.value);
    setItem('counter_name', e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Storage</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section>
        <input value={name} onChange={onNameChange} placeholder="Name of Counter" />
        <br />

        {name}: { count }
        <br />

        <Button title={labelReset} click={onResetButtonClick} />
        <Button title={labelUp} click={onUpButtonClick} variant='green' />
        <Button title={labelDown} click={onDownButtonClick} variant='red' />
        <Button title={labelMax} click={onMaxButtonClick} variant='blue' />

        <hr />

        <ButtonLabelInput buttonName='reset' set={setLabelReset} />&nbsp;
        <ButtonLabelInput buttonName='up' set={setLabelUp} />&nbsp;
        <ButtonLabelInput buttonName='down' set={setLabelDown} />&nbsp;
        <ButtonLabelInput buttonName='max' set={setLabelMax} />&nbsp;

      </section>
    </div>
  );
}

export default App;
