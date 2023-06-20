import React, { useState, useEffect } from "react";
import { injectGlobal } from '@emotion/css';
import WebFont from 'webfontloader';

import { fontsLoader, themes } from './themes';
import useThemifiedComponent from "./app/hooks/useThemifiedComponent";

const App = ({data}) => {
  let fl = data.hasOwnProperty('theme') ? fontsLoader(data.theme) : null;
    if (fl) injectGlobal`${fl}`;

    useEffect(() => {
      if (themes[data.theme]["google-fonts"].length) {
        WebFont.load({
          google: {
            families: themes[data.theme]["google-fonts"]
          }
        });
      }
      
    }, []);

  // ToDo ------- Replace it by your code

  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0);

  const [cssCounterContainer] = useThemifiedComponent('counter-container', data.theme);
  const [cssCounterTitle] = useThemifiedComponent('counter-title', data.theme);
  const [cssCounterValue] = useThemifiedComponent('counter-value', data.theme);
  const [cssControlBox] = useThemifiedComponent('control-box', data.theme);
  const [cssBtnIncrease] = useThemifiedComponent('increase-button', data.theme);
  const [cssBtnDecrease] = useThemifiedComponent('decrease-button', data.theme);
  const [cssStaticString] = useThemifiedComponent('static-string', data.theme);
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    setCounter(counter - 1)
  }
  // ToDo ---------------------------------
  
  return (
    // ToDo: ---- Replace it by your code -----------------
    <div className={cssCounterContainer}>
      <h2 className={cssCounterTitle}>{ data.counter_title ? data.counter_title : 'Counter App' }</h2>
      <div className={cssCounterValue}> {counter} </div>
      <div className={cssControlBox}>
        <button className={cssBtnIncrease} onClick={handleClick1}>Increment</button>
        <button className={cssBtnDecrease} onClick={handleClick2}>Decrement</button>
      </div>
      <p className={cssStaticString}>This React micro-frontend application is available for themification</p>
    </div>
    // ToDo ------------------------------------------------
  )
}

export default App;
