import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let str = '问卷列表页'
  // 列表页

  // 问卷列表数据
  const questionList = [
    {id: 'q1', title: '问卷1', iszpublished: false},
    {id: 'q2', title: '问卷2', iszpublished: false},
    {id: 'q3', title: '问卷3', iszpublished: false},
    {id: 'q4', title: '问卷4', iszpublished: false},
    {id: 'q5', title: '问卷5', iszpublished: false},
  ]
  // 编辑问卷
  function edit(id: string) {
    console.log('id',id);
  }
  return (
    <div className="App">
      <p>{ str }</p>
      <div>
        {questionList.map(ques => {
          const { id, title, iszpublished } = ques
          return <div key={id}>
            <strong>{title}</strong>
            &nbsp;
            {/* 条件判断 */}
          {iszpublished ? <span style={{color: 'green',fontSize: '14px'}}>已发布</span> : <span>未发布</span>}
          &nbsp;
          <button onClick={() => {edit(id)}}>编辑问卷</button>
          </div>
        })}
      </div>
    </div>
  );
}

export default App;
