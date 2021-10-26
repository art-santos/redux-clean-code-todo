import React from 'react'
import Todo from '../molecules/Todo';

const todo = [
  'test',
  'test1',
  'test2',
];

const TodoFactory = () => {
  return (
    <>
      {todo.map((item, i) => (
        <Todo value={item} key={i}/>
      ))}
    </>
  )
}

export default TodoFactory
