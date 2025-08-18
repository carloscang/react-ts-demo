import React, {FC} from 'react';
import QuestionCard from './components/QuestionCard'
import './firstDemo.css'
import './App.css';

const FirstDemo: FC = () => {
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
    <div className="App list-item+++ ">
      <p>{ str }</p>
      <div  className='list-item'>
        {questionList.map(ques => {
          const { id, title, iszpublished } = ques
          return <QuestionCard id={id} title={title} iszpublished={iszpublished} key={id}></QuestionCard>
        })}
      </div>
    </div>
  );
}

export default FirstDemo