import React from 'react';
import './App.css';

type Score = 'A' | 'B' | 'C' | 'D'; 

interface User {
  name :string;
  age :number;
  gender? :string; 
  readonly birthYear :number;
  [grade :number] : Score;
}

const user :User = 
  {name : 'JUHEE',
  age : 34, 
  birthYear : 1990,
  1 :'A',
  2 :'A',}

  interface Add {
    (num1 :number , num2 :number):number;
  }

  const add :Add = function(x,y){
    return x + y;
  }

  console.log(add(1,1))

  const handlerChanged = (event :React.ChangeEvent<HTMLInputElement>) =>{
        console.log(event)
        const val = Number(event.target.value);
        add(val, val+1)
        console.log(add(val, val+1))

  }


// 함수형 컴포넌트 지정 React.FC
const App:React.FC = ()=>{
  return(
    <div className='App'>
      <p>{user.name}</p>
      <input type="number" onChange={handlerChanged}></input>
    </div>
  )
}

export default App;