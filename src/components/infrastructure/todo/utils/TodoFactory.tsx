import React from 'react'
import { useAppSelector } from '../../../app/redux/hooks';
import Todo from '../molecules/Todo';

interface ITodoFactoryProps {
  value: number
}

const TodoFactory: React.FC<ITodoFactoryProps> = ({value}) => {
  const todo:any = useAppSelector((state) => state.todo)

  return (
    <>
      {todo.value &&
      todo.value
      .filter((item:any) => item.position === value)
      .sort((a:any, b:any) => {return b.date < a.date})
      .map((item:any) => {
        return <Todo key={item.id} value={item} position={value} />
      })}
    </>
  )
}

export default TodoFactory
