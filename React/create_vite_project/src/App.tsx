import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [funcCmpState, setFuncCmpState] = useState(0);
  const [classCmpState, setClassCmpState] = useState(0);

  return (
    <React.Fragment>
      <div className="container">
        <h1>Hello world</h1>
        <FuncComp initNumber={funcCmpState}></FuncComp>
        <ClassComp initNumber={classCmpState}></ClassComp>
      </div >
    </React.Fragment >
  )
}

/*--------------Function---------------*/

interface FuncCompProps {
  initNumber: number;
}

function FuncComp(props: FuncCompProps) {
  /* useState 원형 */
  // const testState = useState(0);
  // const test = testState[0];
  // const setTest = testState[1];

  const [_numberState, setNumberState] = useState(props.initNumber);
  const [_dateState, setDateState] = useState((new Date()).toString());

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Initial Number: {_numberState}</p>
      <p>Date: {_dateState}</p>
      <input type="button" value="random" onClick={function () { setNumberState(Math.random()) }} />
      <input type="button" value="date" onClick={function () { setDateState((new Date()).toString()) }} />
    </div>
  );
}

/*--------------Class---------------*/

interface ClassCompProps {
  initNumber: number;
}

class ClassComp extends React.Component<ClassCompProps> {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString(),
  }

  // 1 / render 되기 이전에 처리해야 할 일 
  componentWillMount(): void {
    console.log('%cClass => componentWilMount', 'color:red');
  }

  // 3 / render 된 후 처리해야 할 일 : 추가적으로 도움 받거나, 네트웍으로부터 받고서 처리해야할 때 
  componentDidMount(): void {
    console.log('%cClass => componentDidMount', 'color:red');
  }

  // action 후 4 / render를 호출 할 필요가 있는지 없는지에 대해 true를 리턴하면 render호출, false를 리턴하면 render 호출하지 않은 성능과 관련 
  shouldComponentUpdate(nextProps: Readonly<ClassCompProps>, nextState: Readonly<{}>, nextContext: any): boolean {
    console.log('%cClass => render', 'color:red');
    return true;
  }

  // action 후 6 /
  componentDidUpdate(prevProps: Readonly<ClassCompProps>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log('%cClass => compoenentDidUpdate', 'color:red');
  }

  render() {
    // 2 & action 후 5/  render 화면에 표시
    console.log('%cClass => render', 'color:red');

    return (
      <div className="container bg-red-400">
        <h2>class style component</h2>
        <p>Initial Number : {this.state.number}</p>
        <p>Date : {this.state.date}</p>
        <input type="button" value="random" onClick={function () { this.setState({ number: Math.random() }) }.bind(this)} />
        <input type="button" value="date" onClick={function () { this.setState({ date: (new Date()).toString() }) }.bind(this)} />
      </div>
    )
  }
}

export default App;