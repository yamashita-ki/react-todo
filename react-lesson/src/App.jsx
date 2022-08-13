import React from 'react';
import { useState } from 'react';
import ColorfulMessage from './components/ColorfulMessage';

const App = () => {
  const onClickCountUp = () => {
    setNum(num+1);
  };
  const [num, setNum] = useState(1);
  const contentStyle = {
    color:"blue",
    fontSize:"18px"
  }
  return (
  <>
    <h1 style={contentStyle}>こんにちは！</h1>
    <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
    <ColorfulMessage color="red">genki</ColorfulMessage>
    <button onClick={onClickCountUp}>ボタン</button>
    <p>{num}</p>
  </>
  
  );
}
export default App;
// 47から