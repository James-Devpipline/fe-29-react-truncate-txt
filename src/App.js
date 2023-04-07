/* 
Homework 4/6/2023 - Due Tomorrow

Build a Truncate component that will truncate some text.
 - Utilize children: <Truncate ....>Some Text to trunc...</Truncate> 
 - pass the amount of characters to truncate 
 - Don't use ellipsis if the text is less than the max amount
 - be able to customize the ellipsis, default to "..."
*/

import React from 'react';
import Truncate from './components/Truncate';

function App() {
  return (
    <div className="App">
      <h1><Truncate myStr={"I am a long sentence"} num={14} etc='%%%'/></h1>
      <h1><Truncate myStr={"I am a long sentence"} num={14}/></h1>
      <h1><Truncate myStr={"I am a long sentence"} num={100}/></h1>
      {/* {Truncate("this is a long string", 7, "***")} */}
    </div>
  );
}

export default App;
