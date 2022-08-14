import React, { useEffect } from 'react';
import { useState } from 'react';
import {ColorfulMessage} from './components/ColorfulMessage';

const App = () => {
  const onClickCountUp = () => {
    setNum(num+1);
  };
  const [num, setNum] = useState(1);
  const [faceShowFlag, setFaceShowFlag] = useState(true);
  const contentStyle = {
    color:"blue",
    fontSize:"18px"
  }
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };
  useEffect(() =>{
    if(num % 3 === 0){
      faceShowFlag || setFaceShowFlag(true);
    }else{
      faceShowFlag && setFaceShowFlag(false);
    }
  },[num]);

  return (
  <>
    <h1 style={contentStyle}>こんにちは！</h1>
    <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
    <ColorfulMessage color="red">genki</ColorfulMessage>
    <button onClick={onClickCountUp}>ボタン</button>
    <button onClick={onClickSwitchShowFlag}>on/off</button>
    <p>{num}</p>
    {faceShowFlag &&  <p>( ..)φメモメモ</p>}
  </>
  
  );
}
export default App;
// 47から