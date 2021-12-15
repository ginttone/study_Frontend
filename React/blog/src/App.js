/* eslint-disable */

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','여자 코트 추천','아동 코트 추천','시니어 코트 추천']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '판교 고기 맛집';
  //따봉변경(10); //여기에 직접쓰면 재랜더링 무한으로 일어나기 때문에 쓰면 안 됨
  function 제목바꾸기(){
    var newArray = [...글제목]; //글제목에 있던 0번째 데이터를 여자코트 추천으로 바꿈
    newArray[0] = '남아 외투 추천';
    newArray[1] = '여아 외투 추천';
    newArray[2] = '성인 외투 추천';
    newArray[3] = '성인 신발 추천';
    글제목변경(newArray);
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
      <div>개발 Blog</div>     
      </div>

      <button onClick={ 제목바꾸기 }> 가나다순 정렬 </button>

      <div className='list'>        
        <h3>{ 글제목[0]}<span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div> 

      <div className='list'>
        <h3>{ 글제목[1]}<span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div> 
  
      <div className='list'>
        <h3>{ 글제목[2]}<span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div> 
  
      <div className='list'>
        <h3>{ 글제목[3]}<span onClick={ ()=>{ 따봉변경(따봉+1) } }>👍</span> { 따봉 } </h3> 
        <p>2월 17일 발행</p>
        <hr/>
      </div> 

      <Modal /> {/* <Modal></Modal> */}
  
    </div>
  );
}

//Component 만들기
function Modal(){
  return(
    <>
    <div className='modal'>
      <h2>{ 글제목[0] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
    </>
  )
}

export default App;
