import React, { FC } from "react";

// 自定义类型
type PropsType = {
  id: string,
  title: string,
  iszpublished: boolean
}
const FunctionCard: FC<PropsType> = (props: { id: any; title: any; iszpublished: any; }) => {
  const { id, title, iszpublished } = props;
  // 编辑问卷
  function edit(id: string) {
    console.log('id',id);
  }
  return (
    <div className="App list-item+++ "><div key={id}  className='list-item'>
            <strong>{title}</strong>
            &nbsp;
            {/* 条件判断 */}
          {iszpublished ? <span style={{color: 'green',fontSize: '14px'}}>已发布</span> : <span>未发布</span>}
          &nbsp;
          <button onClick={() => {edit(id)}}>编辑问卷</button>
          </div>
    </div>
  )
}
export default FunctionCard