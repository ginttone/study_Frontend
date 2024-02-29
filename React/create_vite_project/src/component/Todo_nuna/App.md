import React, { useState } from 'react';
import './App.css';
import TodoBoard from './component/Todo_nuna/TodoBoard';

const App: React.FC = () => {
const [inputVal, setInputVal] = useState('');

//초기 상태를 명시적으로 지정하지 않으면 TypeScript가 해당 상태의 타입을 추론하지 못하고 never 타입으로 설정될 수 있다.
const [todoList, setTodoList] = useState<string[]>([]);

const addItem = () => {
//기존 data는 유지하고 새로운 data추가시에 ... 사용
setTodoList([...todoList, inputVal]);

}

return (
<div className='App'>
<input value={inputVal} type="text" onChange={(e) => { setInputVal(e.target.value) }} />
<button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />

    </div>

)
}

export default App;
