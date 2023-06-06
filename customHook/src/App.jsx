import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useToggle } from './hooks/useToggle';
import { useDirection } from './hooks/useDirection';
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {
  const { toggle, handleOnClick } = useToggle();
  console.log(toggle);

  const root = document.querySelector('html');
  // root.style.direction="rtl"
  const { dir, handleDirection, text } = useDirection();
  dir.current = root; //setting current as root

  // dir.current.style.direction="rtl"
  // console.log(dir.current.style, "==dir style");

  // console.log({text});

  // setting text as `${}` instead of {text}
  dir.current.setAttribute('dir', `${text}`);
  const { state, setItem, getItem,handleChange } = useLocalStorage()
  return (
    <>
      <div className="container">
        <div>
          {toggle && <h1>hai</h1>}
          <button onClick={handleOnClick}>Toggle</button>
        </div>

        <div>
          <h1>{dir.current.dir}</h1>
          <button onClick={handleDirection}>Change Direction</button>
        </div>

        <div>
          <input type="text" onChange={handleChange} />
          <h3>{state}</h3>
          <button onClick={setItem}>Set item</button>
          <button onClick={getItem}>Get item</button>
        </div>

      </div>
    </>
  );
}

export default App;
