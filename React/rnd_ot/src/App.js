import React, { useState } from "react";
import "./App.css";

function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

function Nav(props) {
  const lists = [];

  for (let i = 0; i < props.topics.length; i++) {
    let topic = props.topics[i];
    lists.push(
      <li key={topic.id}>
        <a
          id={topic.id}
          href={"/read/" + topic.id}
          onClick={(e) => {
            e.preventDefault(); // 기본동작 방지
            props.onChangeMode(Number(e.target.id));
          }}
        >
          {topic.grpName}
        </a>
      </li>
    );
  }

  return (
    <nav>
      <ol>{lists}</ol>
    </nav>
  );
}

function Board(props) { 

  return (
    <div>
      <h3>{props.grpName}</h3>
      &nbsp;
      <div>Number of People : <span>{props.memCnt}</span></div>
      <div>Member : <span>{props.member}</span></div>
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState("WELCOME");
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    {
      id: 1,
      grpName: "IVE",
      memCnt: "6",
      member: "장원영, 레이, 안유진, 이서, 리즈, 가을",
    },
    {
      id: 2,
      grpName: "BTS",
      memCnt: "7",
      member: "정국, 뷔, 지민, 슈가, 진, RM, 제이홉 ",
    },
    {
      id: 3,
      grpName: "BlackPink",
      memCnt: "4",
      member: "제니, 지수, 로제, 로사 ",
    },
  ]);

  let content = null;

  if (mode === "WELCOME") {
    console.log("home");
  } else if (mode === "READ") {
    let grpName,
      memCnt,
      member = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        grpName = topics[i].grpName;
        memCnt = topics[i].memCnt;
        member = topics[i].member;
      }
    }

    content = <Board grpName={grpName} memCnt={memCnt} member={member} />;
  }

  return (
    <div className="App">
      <div className="LeftSec">
        <Header
          title="Personal Info."
          onChangeMode={() => {
            setMode("WELCOME");
          }}
        ></Header>

        <Nav
          topics={topics}
          onChangeMode={(_id) => {
            setMode("READ");
            setId(_id);
          }}
        />

        <div className="ButtonGrp">
          <button
            id="btnCrt"
            onClick={(event) => {
              event.preventDefault();
              setMode("CREATE");
            }}
          >
            Create
          </button>
          <button
            id="btnUpd"
            onClick={(event) => {
              event.preventDefault();
              setMode("UPDATE");
            }}
          >
            Update
          </button>
          <button
            id="btnDel"
            onClick={(event) => {
              event.preventDefault();
              setMode("DELETE");
            }}
          >
            Delete
          </button>
        </div>

        <div className="ContentBox">
          <label>Group Name : </label>
          <input type="text"></input>
          <br />
          <label>Number of People : </label>
          <input type="number"></input>
          <br />
          <label>Member : </label>
          <input type="textarea"></input>
        </div>

        <div className="ButtonGrp">
          <button id="btnAdd">Add</button>
        </div>
      </div>

      <div className="RigthSec">{content}</div>
    </div>
  );
}
