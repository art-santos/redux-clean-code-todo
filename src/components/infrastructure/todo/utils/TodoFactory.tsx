import React from "react";
import { useAppSelector } from "../../../app/redux/hooks";
import { ITodoFactoryProps } from "../../../domain/interfaces/interfaces-organisms";
import { ITodo } from "../../../domain/interfaces/interfaces-todo";
import Todo from "../molecules/Todo";

const TodoFactory: React.FC<ITodoFactoryProps> = ({ value }) => {
  const todo: any = useAppSelector((state) => state.todo);

  return (
    <>
      {todo.value &&
        todo.value
          .filter((item: ITodo) => item.position === value)
          .sort((a: ITodo, b: ITodo) => {
            return b.date < a.date;
          })
          .map((item: ITodo) => {
            return <Todo key={item.id} value={item} position={value} />;
          })}
    </>
  );
};

export default TodoFactory;
